import React from 'react'
import {graphql} from 'gatsby'

import SEO from '../../../seo'

import Layout from '../../../layout'

import ProductGrid from "../../productGrid/shopify-product-grid";




const CollectionPage = () => {

    return (
        <>
            <Layout>
                <SEO title={`Tag`} description={`Desc`} />
                <h2>Tag Page</h2>


            </Layout>

        </>
    )
}

export default CollectionPage


