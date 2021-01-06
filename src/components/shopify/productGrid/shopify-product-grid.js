import ProductCard from "../productCard/shopify-product-card";
import React from "react";

import getPrice from "../utils/getPrice"

import styles from "./shopify-product-grid.module.scss"
import {Link} from "gatsby";

const ProductGrid = ({children, currentPage, numPages, collectionHandle}) => {

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/collection/" + collectionHandle : `/collection/${collectionHandle}/` + (currentPage - 1).toString()
    const nextPage = `/collection/${collectionHandle}/` + (currentPage + 1).toString()
    const showPagination = numPages > 1

    let products = []
    let i = 0
    children.map(({node}) => (
        products[i++] = node
    ))

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <ProductCard
                        title={product.title}
                        key={product.shopifyId}
                        image={product.images[0].localFile.childImageSharp.fluid}
                        handle={product.handle}
                        description={product.description}
                        price={getPrice(product.priceRange.minVariantPrice.amount)}
                    />
                ))}
            </div>
            {showPagination &&
                <div className={`styles.productNavigation`}>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev">
                            &lt;&lt;
                        </Link>
                    )}
                    {Array.from({length: numPages}, (_, i) => (
                        <Link key={`pagination-number${i + 1}`}
                              to={`/collection/${collectionHandle}/${i === 0 ? "" : i + 1}`}>
                            {i + 1}
                        </Link>
                    ))}
                    {!isLast && (
                        <Link to={nextPage} rel="next">
                            &gt;&gt;
                        </Link>
                    )}
                </div>
            }
        </div>
    )
}
export default ProductGrid

ProductGrid.defaultProps = {
    showPagination: false,
    numProducts: 12,
}
