import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    fragment ShopifyProductFields on ShopifyProduct {
        id
        title
        productType
        description
        descriptionHtml
        shopifyId
        tags
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
        
        images {
            originalSrc
            id
            localFile {
                childImageSharp {
                    fluid(maxWidth: 720) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    }
    fragment ProductTileFields on ShopifyProduct {
        handle
        priceRange {
            minVariantPrice {
                amount
            }
        }
    }
    {
        allShopifyProduct {
            edges {
                node {
                    ...ShopifyProductFields
                    ...ProductTileFields
                }
            }
        }
        allShopifyCollection(sort: { fields: title, order: ASC }) {
            edges {
                node {
                    products {
                        ...ShopifyProductFields
                        ...ProductTileFields
                    }
                    title
                    description
                    shopifyId
                    image {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;


const defaultState = {
    products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
    const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query);

    return (
        <ProductContext.Provider
            value={{
                products: allShopifyProduct.edges.map(({ node }) => node) || [],
                collections: allShopifyCollection.edges.map(({ node }) => node) || [],
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}