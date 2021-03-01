import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Logo = ({fullLogo}) => {

    const data = useStaticQuery(graphql`
        query {
            initials: file(relativePath: { eq: "rhm-logomark.png" }) {
                childImageSharp {
                    fluid(maxWidth: 114) {
                        ...GatsbyImageSharpFluid
                    }
                }
                
            }
            full: file(relativePath: { eq: "logo-fullText.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }

            }
        }
    `)
    const output = fullLogo ? data.full.childImageSharp.fluid : data.initials.childImageSharp.fluid

    if (!output) {
        return <div>Picture not found</div>
    }

    return <Img fluid={output}  />
}

export default Logo
