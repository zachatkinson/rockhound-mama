import React from "react"
import {Link} from "gatsby"

import styles from "./shopify-collection-card.module.scss"



import BackgroundImage from 'gatsby-background-image'

const CollectionCard = ({collection}) => {

    return (
        <div className={styles.collectionCard}>
            <BackgroundImage fluid={collection.image.localFile.childImageSharp.fluid}>
                <div className={styles.collectionCardContent}>
                    <h5 className={styles.collectionCardTitle}>
                        {collection.title}
                    </h5>
                    <Link to={`/collection/${collection.handle}`} className={styles.collectionCardViewButton}>
                        View
                    </Link>
                </div>
            </BackgroundImage>
        </div>
    )

}

export default CollectionCard

