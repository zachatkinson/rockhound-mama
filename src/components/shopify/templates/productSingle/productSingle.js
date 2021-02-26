/* eslint-disable jsx-a11y/no-onchange*/
import React from 'react'
import { graphql, Link } from 'gatsby'
import {navigate, useLocation} from "@reach/router";
import queryString from "query-string"

import SEO from '../../../seo'
import Layout from '../../../layout'

import styles from './productSingle.module.scss'

import tagHandle from "../../utils/tagHandle"

import ImageGallery from "../../imageGallery/shopify-image-gallery";
import CartContext from "../../context/CartContext";




const ProductPage = ({ data }) => {
    const staticProduct = data.shopifyProduct

    const { getProductById } = React.useContext(CartContext)
    const [product, setProduct] = React.useState(null)
    const [selectedVariant, setSelectedVariant] = React.useState(null)
    const {search, origin, pathname} = useLocation()

    const variantId = queryString.parse(search).variant

    const handleVariantChange = (e) => {
        const newVariant = product?.variants.find(variant => variant.id === e.target.value)
        setSelectedVariant(newVariant)
        navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`, {
            replace: true,
            }
        )
    }



    React.useEffect(() => {
        getProductById(data.shopifyProduct.shopifyId).then(result => {
            setProduct(result)
            setSelectedVariant(
                result.variants.find(({id}) => id === variantId )|| result.variants[0]
            )

        })
    }, [getProductById, data.shopifyProduct.shopifyId, setProduct, variantId])


    return (
        <>
            <Layout>
                <SEO title={staticProduct.title} description={staticProduct.description} />
                <div className={styles.productWrapper}>
                    <ImageGallery
                        selectedVariantImageId={selectedVariant?.image.id}
                        images={staticProduct.images} />
                    <div className={styles.productInfo}>
                        <h1>{staticProduct.title}</h1>
                        {product?.availableForSale && !!selectedVariant && (
                        <form>
                            <p><strong>${selectedVariant?.price}</strong></p>
                            <div className={styles.variantWrapper}>
                                {product?.variants.length > 1 && (
                                    <div className={`select-wrap`}>
                                    <label htmlFor={`variants`}>Variants</label><br />

                                    <select name={`variants`} onChange={handleVariantChange} value={selectedVariant.id}>
                                        {product.variants.map(variant => (

                                            <option key={variant.id} value={variant.id}>{variant.title}</option>

                                        ))}
                                    </select>
                                    </div>
                                )}

                            </div>

                        </form>)
                        }
                        <button className={``} href={`#`}>Add to Cart</button>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: staticProduct.descriptionHtml }}></div>
                        {staticProduct.tags.map(tag => (
                            <Link to={`/tag/${tagHandle(tag)}/`} className={styles.tagButton} key={tag}>{tag}</Link>
                        ))}
                    </div>
                </div>
                <h2>You May Also Like</h2>
            </Layout>
        </>
    )
}

export const query = graphql`
    query($handle: String!) {
        shopifyProduct(handle: { eq: $handle }) {
            id
            title
            handle
            productType
            description
            descriptionHtml
            shopifyId
            tags
            options {
                id
                name
                values
            }
            variants {
                id
                title
                price
                availableForSale
                shopifyId
                selectedOptions {
                    name
                    value
                }
            }
            priceRange {
                minVariantPrice {
                    amount
                    currencyCode
                }
                maxVariantPrice {
                    amount
                    currencyCode
                }
            }
            images {
                originalSrc
                id
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default ProductPage