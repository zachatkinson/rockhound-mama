/* eslint-disable jsx-a11y/no-onchange*/
import React from 'react'
import { graphql, Link } from 'gatsby'
import {navigate, useLocation} from "@reach/router";
import queryString from "query-string"

import Seo from '../../../seo'
import Layout from '../../../layout'

import styles from './productSingle.module.scss'

import tagHandle from "../../utils/tagHandle"

import ProductQuantityAdder from "../../productQuantityAdder/shopify-product-quantity-adder";

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
                <Seo title={staticProduct.title} description={staticProduct.description} />
                <div className={styles.productWrapper}>
                    <ImageGallery
                        selectedVariantImageId={selectedVariant?.image.id}
                        images={staticProduct.images} />
                    <div className={styles.productInfo}>
                        <h1>{staticProduct.title}</h1>
                        {product?.availableForSale && !!selectedVariant && (
                        <div>

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
                                <p><strong>${selectedVariant?.price}</strong></p>
                                <ProductQuantityAdder variantId={selectedVariant.id} available={selectedVariant.available} />

                            </div>

                        </div>)
                        }
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
    query ProductQuery($handle: String!) {
        shopifyProduct(handle: { eq: $handle }) {
            ...ShopifyProductFields
        }
    }
`

export default ProductPage