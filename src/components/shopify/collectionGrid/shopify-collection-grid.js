
import React from "react";

import CollectionCard from "../collectionCard/shopify-collection-card";
import styles from "./shopify-collection-grid.module.scss"

const CollectionGrid = ({children}) => {
    const collections = {children}

    return (
        <div className={styles.collectionGrid}>
            {collections.children.edges.map(({node}) => (
                <CollectionCard
                    title={node.title}
                    key={node.shopifyId}
                    image={node.image.localFile.childImageSharp.fluid}
                    handle={node.handle}
                />
            ))}
        </div>
    )
}
export default CollectionGrid




