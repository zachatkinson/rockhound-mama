const path = require(`path`)


exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    return graphql(`
{
      products: allShopifyProduct {
        edges {
          node {
            handle
            tags
          }
        }
      }
      collections: allShopifyCollection{
        edges{
          node{
            products{
                handle
            }
            handle
          }
        }
      }
}
  `).then(result => {
        let allTags = []
        result.data.products.edges.forEach(({node}) => {
            createPage({
                path: `/product/${node.handle}/`,
                component: path.resolve(`./src/components/shopify/templates/productSingle/productSingle.js`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    handle: node.handle,
                },
            })
            allTags = allTags.concat(node.tags)

        })
        // clean all tags by converting to lowercase
        // and replacing spaces with hyphens
        const cleanTags = allTags.map((tag) => {
            tag = tag.replace(/\s+/g, '-')
            return tag.toLowerCase()
        })
        const uniqueTags = Array.from(new Set(cleanTags))

        uniqueTags.forEach((tag) => {
            createPage({
                path: `/tag/${tag}`,
                component: path.resolve(`./src/components/shopify/templates/tagSingle/tagSingle.js`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    tag: tag,
                },
            })
        })
        result.data.collections.edges.forEach(({node}) => {
            const products = node.products.map(product => product.handle)
            const numProducts = products.length
            const productsPerPage = 12
            const numPages = Math.ceil(products.length / productsPerPage)
            Array.from({length: numPages}).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/collection/${node.handle}/` : `/collection/${node.handle}/${i + 1}`,
                    component: path.resolve(`./src/components/shopify/templates/collectionSingle/collectionSingle.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        handle: node.handle,
                        products: products,
                        limit: productsPerPage,
                        skip: i * productsPerPage,
                        numPages,
                        numProducts,
                        currentPage: i + 1,
                    },
                })
            })

        })
    })

}