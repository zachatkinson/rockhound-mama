import React from "react"
import Img from "gatsby-image"

import styles from "./shopify-image-thumbnail.module.css"

const ImageThumbnail = ({isActive, onClick, image}) => {

    const handleClick = () => {
        onClick(image);
    }
return (
    <div
        className={[styles.thumbWrap]}
        onClick={handleClick}
    >

        <Img fluid={image.localFile.childImageSharp.fluid} />
    </div>
)
}
export default ImageThumbnail