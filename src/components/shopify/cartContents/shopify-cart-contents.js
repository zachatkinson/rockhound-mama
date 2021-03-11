import React from "react"
import CartContext from "../context/CartContext"

import CartItem from "./cartItem/shopify-cart-item";

import styles from "./shopify-cart-contents.module.scss"
import {Link} from "gatsby";


const CartContents = () => {
    const {checkout} = React.useContext(CartContext)
    return (
        <section>
            <div className={styles.cartGreeting}>
                <h1>Your Cart</h1>
                <Link to={`/`}><p>Continue Shopping</p></Link>
            </div>
            <div className={styles.itemGrid}>
                <div className={styles.cartHeading}>
                    <div className={styles.cartProductHeader}>
                        Product
                    </div>
                    <div className={styles.cartPriceHeader}>
                        Price
                    </div>
                </div>

            {checkout?.lineItems?.map(lineItem => {
                console.log(lineItem)
                return (
                    <CartItem key={lineItem.key} item={lineItem} />
                )
            })}
            </div>
            <div className={styles.cartGreeting}>
                <h5><strong>Subtotal: </strong>${checkout?.totalPrice}</h5>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to={`/`}><p>Check Out</p></Link>
            </div>
        </section>
    )
}
export default CartContents