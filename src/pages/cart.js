import React from "react"
import Layout from "../components/layout"
import CartContents from "../components/shopify/cartContents/shopify-cart-contents";
import Seo from "../components/seo";

const CartPage = () => {
    return(
        <Layout>
            <Seo title="Cart"/>
            <CartContents />
        </Layout>
    )
}
export default CartPage