import React from "react"
import CartContext from "../context/CartContext"


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
                    <div className={styles.cartItem} key={lineItem.key}>
                        <div className={styles.itemProductInfo}>
                            <div className={styles.itemPic}>
                                <img src={lineItem.variant.image.src} width={`60`} height={`60`} alt={lineItem.title}/>
                            </div>
                            <div className={styles.itemDetails}>
                                <div className={styles.itemTitle}>
                                    <h6>{lineItem.title}</h6>
                                    {(lineItem.variant.title !== "Default Title") &&
                                    <p className={styles.styleType}>Style: {lineItem.variant.title}</p>
                                    }
                                    <p>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemPrices}>
                            <p>${lineItem.variant.price}<br />
                                Qty: {lineItem.quantity}<br />
                                Total: ${(lineItem.variant.price * lineItem.quantity).toFixed(2)}</p>
                        </div>

                    </div>
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