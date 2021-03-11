import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeHeader from "../components/callouts/homeHeader";

import CollectionGrid from "../components/shopify/collectionGrid/shopify-collection-grid";
import ProductGrid from "../components/shopify/productGrid/shopify-product-grid";
import {graphql} from "gatsby";
import Treeline from "../components/treeline";

const IndexPage = ({data}) => (
    <Layout>
        <SEO title="Home"/>
        <HomeHeader />
        <ProductGrid>
            {data.products.edges}
        </ProductGrid>
        <h2>Collections</h2>
        <CollectionGrid>
            {data.collections}
        </CollectionGrid>
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
    collections: allShopifyCollection {
        edges {
            node {
                handle
                title
                shopifyId
                image {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 960) {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    }
}
`


