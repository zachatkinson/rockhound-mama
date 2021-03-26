import React from "react"
import Layout from "../components/layout"
import ProductContext from "../components/shopify/context/ProductContext";
import Filters from "../components/shopify/filters/shopify-filters";
import ProductGrid from "../components/shopify/productGrid/shopify-product-grid";
import queryString from "query-string"
import {useLocation} from "@reach/router"

const AllProducts = () => {

    const {products, collections} = React.useContext(ProductContext)
    const collectionProductMap = {}
    const {search} = useLocation()
    const qs = queryString.parse(search)

    const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || []
    const selectedCollectionIdsMap = {}

    selectedCollectionIds.forEach(collectionId => {
        selectedCollectionIdsMap[collectionId] = true
    })

    if(collections){
        collections.forEach(collection =>{
            collectionProductMap[collection.shopifyId]= {}
            collection.products.forEach(product => {
                collectionProductMap[collection.shopifyId][product.shopifyId] = true
            })
        })
    }
    console.log(collectionProductMap)
    const filterByCategory = (product) => {
        if(Object.keys(selectedCollectionIdsMap).length){
            for(let key in selectedCollectionIdsMap){
                if(collectionProductMap[key]?.[product.shopifyId]){
                    return true;
                }

            }
            return false

        }
        return true
    }
    const filteredProducts = products.filter(filterByCategory)
    return(
        <Layout>
            <div className={`productsContent`}>
                <Filters  />
                <div>
            <h4>{filteredProducts.length} products</h4>
                    <ProductGrid products={filteredProducts} productsPerPage={"50"} />
                </div>
            </div>
        </Layout>
    )
}
export default AllProducts