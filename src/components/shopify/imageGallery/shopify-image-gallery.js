import React from "react"
import Img from "gatsby-image"

import ImageThumbnail from "./imageThumbnail/shopify-image-thumbnail"
import {ThumbGrid} from "./styles"

const ImageGallery = ({selectedVariantImageId, images}) => {
    const[activeImageThumbnail, setActiveImageThumbnail] = React.useState(
        images.find(({id}) => id === selectedVariantImageId) || images[0]
    )

    React.useEffect(() => {
        setActiveImageThumbnail(images.find(({id}) => id === selectedVariantImageId) || images[0])
    }, [selectedVariantImageId, setActiveImageThumbnail, images])
    const handleClick = (image) => {
        setActiveImageThumbnail(image)
    }
    return(
        <div>
                    <Img
                        fluid={activeImageThumbnail.localFile.childImageSharp.fluid}
                        alt={`product.title`}
                    />
            <ThumbGrid>
                {images.map((image) => {
                    return(
                        <ImageThumbnail
                            key={image.id}
                            onClick={handleClick}
                            isActive={activeImageThumbnail.id === image.id}
                            image={image} />
                    )
                })
                }
            </ThumbGrid>
        </div>

    )
}
export default ImageGallery
