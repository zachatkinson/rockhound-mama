import React from "react"
import {Link} from "gatsby"

import styles from "./shopify-product-card.module.scss"

import BackgroundImage from 'gatsby-background-image'

const ProductCard = (props) => {
    return (
        <div className={styles.productCard}>
            <BackgroundImage fluid={props.image}>
                <div className={styles.productCardContent}>
            <h6 className={styles.productCardTitle}>
                {props.title}
            </h6>
                    <p><i>${props.price}</i></p>
                    <Link to={`/product/${props.handle}`} className={styles.productCardViewButton}>
                    View
                    </Link>
                </div>
            </BackgroundImage>
        </div>
    )

}

export default ProductCard

