import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"


import CollectionGrid from "../components/shopify/collectionGrid/shopify-collection-grid";

import {graphql} from "gatsby";
import Treeline from "../components/treeline";

import ProductContext from "../components/shopify/context/ProductContext";

import ProductGrid from "../components/shopify/productGrid/shopify-product-grid";

const IndexPage = ({data}) => {
    const {collections} = React.useContext(ProductContext)
    let products = []
    let i = 0
    data.products.edges.map(({node}) => (
        products[i++] = node
    ))
    return (

        <Layout>
            <Seo title="Home"/>
            <CollectionGrid collections={collections} />
            <h2>Latest Products</h2>
            <ProductGrid products={products} />

            <div className={`tree-callout`}>
                <div className={`inner-tree-callout`}>
                    <div className={`tree-img`}><Image /></div>
                    <div className={`tree-content`}>
                        <h2>One Tree Planted</h2>
                        <p>Founded in 2014, One Tree Planted's first project planted 20,000 trees. Since then, they've expanded activity via collaborations with other environmental groups in the US and globally, actively participating in various reforestation projects. The organization gained visibility and public media attention over the years as climate change awareness grew among individuals and businesses.</p>
                    </div>
                </div>
                <div className={`footer-top`}>
                    <Treeline />
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

export const data = graphql`{
    products: allShopifyProduct(sort: { fields: [createdAt], order: DESC }, limit: 12) {
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


