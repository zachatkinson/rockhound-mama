import React from 'react'
import ProductContext from "../context/ProductContext";
import CategoryFilterItem from "./categoryFilterItem/shopify-category-filter-item";
import {CategoryList, FilterBox} from "./styles";

const Filters = () => {
    const {collections, /*products*/} = React.useContext(ProductContext)



    return (
        <FilterBox>

            <strong>Categories</strong>
            <CategoryList>
        {collections?.map(collection => (
                    <CategoryFilterItem title={collection.title} id={collection.handle} />
                )
            )}
            </CategoryList>

        </FilterBox>
    )
}

export default Filters