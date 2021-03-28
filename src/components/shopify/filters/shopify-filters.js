import React from 'react'
import ProductContext from "../context/ProductContext";
import styles from "./shopify-filters.module.scss"
import CategoryFilterItem from "./categoryFilterItem/shopify-category-filter-item";

const Filters = () => {
    const {collections, products} = React.useContext(ProductContext)



    return (
        <div className={styles.filterBox}>

            <strong>Categories</strong>
            <div className={styles.categoryList}>
        {collections?.map(collection => (
                    <CategoryFilterItem title={collection.title} id={collection.handle} />
                )
            )}
            </div>

        </div>
    )
}

export default Filters