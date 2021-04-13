import React from "react"
import Layout from "../components/layout"
import CartContents from "../components/shopify/cartContents/shopify-cart-contents";
import SEO from "../components/seo";

const CartPage = () => {
    return(
        <Layout>
            <SEO title="Cart"/>
            <CartContents />
        </Layout>
    )
}
export default CartPage