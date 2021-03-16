
import React from "react";

import CollectionCard from "../collectionCard/shopify-collection-card";
import styles from "./shopify-collection-grid.module.scss"

const CollectionGrid = ({collections}) => {
    console.log(collections)
    return (
        <div className={styles.collectionGrid}>
            {collections?.map(collection => (
                <CollectionCard
                    collection={collection}
                    key={collection.shopifyId}
                />
            ))}
        </div>
    )
}
export default CollectionGrid




