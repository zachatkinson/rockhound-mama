
import React from "react";

import CollectionCard from "../collectionCard/shopify-collection-card";
import styles from "./shopify-collection-grid.module.scss"

const CollectionGrid = ({collections}) => {
    const bundleCollection = collections?.find(collection => collection.title === "Bundles")
    const remainingCollections= collections?.filter(collection => collection.title !== `Bundles`)
    return (
        <div className={styles.allCollections}>
            {!!bundleCollection &&
            <CollectionCard
                collection={bundleCollection}
                key={bundleCollection.shopifyId}
            />
            }
        <div className={styles.remainingCollections}>

            {remainingCollections?.map(collection => (
                <CollectionCard
                    collection={collection}
                    key={collection.shopifyId}
                />
            ))}
        </div>
        </div>
    )
}
export default CollectionGrid




