import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import Logo from "../logo"


import styles from "./homeHeader.module.scss"


const HomeHeader = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "winter-deals.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1440) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return(
        <div className={styles.homeHeader}>
            <BackgroundImage
                fluid={data.placeholderImage.childImageSharp.fluid}
                className={styles.bgImg}
            >
                <div className={styles.homeHeaderContent}>
                    <div className={styles.logoImg}>
                        <Logo />
                    </div>
                    <h1 className={`rich-ganbatte`}>Holiday Packages</h1>
                    <h3 className={`uppercase`}>Calm Your Soul with our New Years Bundles</h3>
                    <Link to={`#`} className={styles.viewButton}>
                        View Bundles
                    </Link>
                </div>
            </BackgroundImage>
        </div>
    )
}
export default HomeHeader