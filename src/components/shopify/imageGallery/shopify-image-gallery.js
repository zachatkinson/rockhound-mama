import React from "react"
import styles from "../imageGallery/shopify-image-gallery.module.scss"
import Img from "gatsby-image"

import ImageThumbnail from "./imageThumbnail/shopify-image-thumbnail"

const ImageGallery = ({images}) => {
    const[activeImageThumbnail, setActiveImageThumbnail] = React.useState(
        images[0]
    )
    const handleClick = (image) => {
        setActiveImageThumbnail(image)
    }
    return(
        <div className={styles.imageGallery}>
                    <Img
                        className={styles.mainImage}
                        fluid={activeImageThumbnail.localFile.childImageSharp.fluid}
                        alt={`product.title`}
                    />
            <div className={styles.thumbGrid}>
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
            </div>
        </div>

    )
}
export default ImageGallery