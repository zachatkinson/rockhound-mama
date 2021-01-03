import React from 'react'
import {graphql} from 'gatsby'

import SEO from '../../../seo'

import Layout from '../../../layout'

import ProductGrid from "../../productGrid/shopify-product-grid";




const CollectionPage = ({data, pageContext}) => {

    const collection = data.collection.edges[0]
    const currentPage = pageContext.currentPage
    const numPages = pageContext.numPages
    const collectionHandle = collection.node.handle
    const productsPerPage = pageContext.productsPerPage


    return (
        <>
            <Layout>
                <SEO title={collection.node.title} description={collection.node.description} />
                <h2>Latest Products</h2>
                <ProductGrid currentPage={currentPage} numPages={numPages} collectionHandle={collectionHandle} productsPerPage={productsPerPage}>
                    {data.products.edges}
                </ProductGrid>


            </Layout>

        </>
    )
}
export const data = graphql`
    query ($handle: String!, $products: [String!], $skip: Int!, $limit: Int!) {
        collection: allShopifyCollection(
            filter: {handle: {eq: $handle}}) {
            edges {
                node {
                    description
                    handle
                    title
                    
                }
            }
        }
        products: allShopifyProduct(
            sort: { fields: [createdAt], order: DESC }
            limit: $limit
            skip: $skip
            filter: {handle: {in: $products}}
        ) {
            edges {
                node {
                    title
                    shopifyId
                    description
                    handle
                    images {
                        id
                        originalSrc
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 360) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                    priceRange {
                        minVariantPrice {
                            amount
                        }
                    }
                }
            }
        }
    }
`

export default CollectionPage


