import React from 'react'
import { graphql, Link } from 'gatsby'

import Img from 'gatsby-image'

import SEO from '../../../seo'

import Layout from '../../../layout'

import styles from './productSingle.module.scss'

import getPrice from "../../utils/getPrice";

import tagHandle from "../../utils/tagHandle";



const ProductPage = ({ data }) => {
    const product = data.shopifyProduct
    const showOptions =  product.variants[0].selectedOptions[0].value  === "Default Title" ? false : true
    return (
        <>
            <Layout>
                <SEO title={product.title} description={product.description} />
                <div className={styles.productWrapper}>
                    <div className={styles.imageGallery}>
                    {product.images.map(image => (
                        <Img
                            fluid={image.localFile.childImageSharp.fluid}
                            key={image.id}
                            alt={product.title}
                        />
                    ))}
                    </div>
                    <div className={styles.productInfo}>
                        <h1>{product.title}</h1>
                        <p><strong>${getPrice(product.priceRange.minVariantPrice.amount)}</strong></p>
                        <form>
                            {showOptions &&
                                <div className={styles.variantWrapper}>
                                    <label for={`variants`}>{product.variants[0].selectedOptions[0].name}</label><br />
                                    <select name={`variants`}>
                                    {product.variants.map(variant => (
                                        variant.availableForSale && (
                                            <option key={variant.shopifyId} value={variant.title}>{variant.title}</option>
                                        )
                                ))}
                                    </select>
                                </div>
                            }
                            <Link className={styles.cartButton}>Add to Cart</Link>
                            <Link className={styles.cartButton}>Buy Now</Link>
                        </form>

                            <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}></div>
                        {product.tags.map(tag => (
                            <Link to={`/tag/${tagHandle(tag)}/`} className={styles.tagButton}>{tag}</Link>
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