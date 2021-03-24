import React from 'react'
import ProductContext from "../context/ProductContext"
import ProductGrid from "../productGrid/shopify-product-grid"

const FeaturedProducts = ({collectionName}) => {
    const {collections} = React.useContext(ProductContext)
    const selectedCollection  = collections?.find(collection => collection.title === collectionName)

    return (
        <section>
            <h1>{selectedCollection.title}</h1>
            <ProductGrid products={selectedCollection.products} />
        </section>
    )
}

export default FeaturedProducts