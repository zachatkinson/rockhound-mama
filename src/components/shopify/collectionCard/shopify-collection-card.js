import React from "react"
import {Link} from "gatsby"

import styles from "./shopify-collection-card.module.scss"

import BackgroundImage from 'gatsby-background-image'

const CollectionCard = ({collection}) => {

    return (
        <div className={styles.collectionCard}>
            <BackgroundImage fluid={collection.image.localFile.childImageSharp.fluid}>
                <div className={styles.collectionCardContent}>
                    <h2 className={styles.collectionCardTitle}>
                        {collection.title}
                    </h2>
                    <Link to={`/all-products?c=${collection.handle}`} className={styles.collectionCardViewButton}>
                        Shop Now
                    </Link>
                </div>
            </BackgroundImage>

        </div>
    )

}

export default CollectionCard

