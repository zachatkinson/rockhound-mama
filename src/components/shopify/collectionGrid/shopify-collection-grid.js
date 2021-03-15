
import React from "react";

import CollectionCard from "../collectionCard/shopify-collection-card";
import styles from "./shopify-collection-grid.module.scss"

const CollectionGrid = ({collections}) => {

    return (
        <div className={styles.collectionGrid}>
            {collections.map((collection) => (
                <CollectionCard
                    title={collection.title}
                    key={collection.shopifyId}
                    image={collection.image.localFile.childImageSharp.fluid}
                    handle={collection.handle}
                />
            ))}
        </div>
    )
}
export default CollectionGrid




