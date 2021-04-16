
import React from "react";

import CollectionCard from "../collectionCard/shopify-collection-card";

import {AllCollections, RemainingCollections} from "./styles";

const CollectionGrid = ({collections}) => {
    const bundleCollection = collections?.find(collection => collection.title === "Bundles")
    const remainingCollections= collections?.filter(collection => collection.title !== `Bundles`)
    return (
        <AllCollections>

            <CollectionCard
                collection={bundleCollection}
                key={bundleCollection.shopifyId}
                className={`lead-img`}
            />

            <RemainingCollections>

                {remainingCollections?.map(collection => (
                    <CollectionCard
                        collection={collection}
                        key={collection.shopifyId}
                    />
                ))}
            </RemainingCollections>
        </AllCollections>
    )
}
export default CollectionGrid




