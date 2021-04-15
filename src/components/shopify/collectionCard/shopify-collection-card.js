import React from "react"

import {CollectionCardContent, CollectionCardTitle, CollectionCardViewButton, CollectionCardWrap} from "./styles";

import BackgroundImage from 'gatsby-background-image'

const CollectionCard = ({collection}) => {

    return (
        <CollectionCardWrap>
            <BackgroundImage fluid={collection.image.localFile.childImageSharp.fluid}>
                <CollectionCardContent>
                    <CollectionCardTitle>
                        {collection.title}
                    </CollectionCardTitle>
                        <CollectionCardViewButton aria-label={`Shop ${collection.title}`} to={`/all-products?c=${encodeURIComponent(collection.handle)}`} >
                            Shop Now
                        </CollectionCardViewButton>
                </CollectionCardContent>
            </BackgroundImage>

        </CollectionCardWrap>
    )

}

export default CollectionCard

