import React from "react"
import {Link} from "gatsby"

import styles from "./shopify-collection-card.module.scss"



import BackgroundImage from 'gatsby-background-image'

const CollectionCard = (props) => {
    return (
        <div className={styles.collectionCard}>
            <BackgroundImage fluid={props.image}>
                <div className={styles.collectionCardContent}>
                    <h5 className={styles.collectionCardTitle}>
                        {props.title}
                    </h5>
                    <Link to={`/collection/${props.handle}`} className={styles.collectionCardViewButton}>
                        View
                    </Link>
                </div>
            </BackgroundImage>
        </div>
    )

}

export default CollectionCard

