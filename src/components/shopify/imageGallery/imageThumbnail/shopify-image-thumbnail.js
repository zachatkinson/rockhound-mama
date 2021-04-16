import React from "react"
import Img from "gatsby-image"

import {ThumbWrap} from "./styles";

const ImageThumbnail = ({isActive, onClick, image}) => {

    const handleClick = () => {
        onClick(image);
    }
return (
    <ThumbWrap
        onClick={handleClick}
        onKeyDown={handleClick}
        role={`button`}
        tabIndex={`0`}
    >

        <Img fluid={image.localFile.childImageSharp.fluid} />
    </ThumbWrap>
)
}
export default ImageThumbnail