import React from "react"
import CartContext from "../context/CartContext"

import CartItem from "./cartItem/shopify-cart-item";

import styles from "./shopify-cart-contents.module.scss"
import {Link} from "gatsby";


const CartContents = () => {
    const {checkout} = React.useContext(CartContext)
    return (
        <section>
            <h1>Your Cart</h1>
            <Link to={`/`}><p>Continue Shopping</p></Link>
            {checkout?.lineItems?.map(lineItem => {
                console.log(lineItem)
                return (
                    <CartItem key={lineItem.key} item={lineItem} />
                )
            })}
        </section>
    )
}
export default CartContents