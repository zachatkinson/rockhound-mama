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

    const searchTerm = qs.s

    selectedCollectionIds.forEach(collectionId => {
        selectedCollectionIdsMap[collectionId] = true
    })

    if(collections){
        collections.forEach(collection =>{
            collectionProductMap[collection.handle]= {}
            collection.products.forEach(product => {
                collectionProductMap[collection.handle][product.shopifyId] = true
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
    const filterBySearchTerm = (product) => {
        if(searchTerm){
            return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        }
        return true
    }
    const filteredProducts = products.filter(filterByCategory).filter(filterBySearchTerm)
    return(
        <Layout>
            <div className={`productsContent`}>
                <div className={`productsHeader`}>
                    <div>
                        {!!searchTerm && !!filteredProducts.length && (
                            <h2>Search Term: <strong>'{searchTerm}'</strong></h2>
                        )}
                        {!!filteredProducts.length && (
                            <h3>{filteredProducts.length} products</h3>
                        )}

                    </div>
                </div>
                <div className={`testingFlex`}>
                <Filters  />
                </div>
                <div>
                    {!!filteredProducts.length && (
                        <ProductGrid products={filteredProducts} productsPerPage={"50"} />
                    )}
                    {!filteredProducts.length && (
                        <div>
                        <h3>Sorry, We don't have any results for the search term: <strong>{searchTerm}</strong></h3>
                        <div>
                            To help with your search, why not try:
                        <br />
                        <ul>
                        <li>Check your spelling</li>
                        <li>Use less words</li>
                        <li>Try a new search term</li>
                        </ul>
                        <br />
                        </div>
                        </div>
                    )}

                </div>
            </div>
        </Layout>
    )
}
export default AllProducts