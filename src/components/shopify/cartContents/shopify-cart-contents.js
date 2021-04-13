import React from "react"
import CartContext from "../context/CartContext"

import CartQuantityAdjuster from "../cartQuantityAdjuster/shopify-cart-quantity-adjuster";

import styles from "./shopify-cart-contents.module.scss"
import {Link} from "gatsby"
import "gatsby-image"
import RemoveLineItem from "../removeLineItem/shopify-remove-line-item";

import {navigate} from "@reach/router";


const CartContents = () => {
    const {checkout, updateLineItem} = React.useContext(CartContext)
    const handleAdjustQuantity = ({quantity, variantId}) => {
        updateLineItem({quantity, variantId})
    }
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
                return (
                    <div className={styles.cartItem} key={lineItem.variant.id}>
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
                                    <RemoveLineItem  lineItemId={lineItem.id} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemPrices}>
                            <p>${lineItem.variant.price}</p><br />
                            Quantity:
                                <CartQuantityAdjuster item={lineItem} onAdjust={handleAdjustQuantity} />
                                <p>Total: ${(lineItem.variant.price * lineItem.quantity).toFixed(2)}</p>
                        </div>

                    </div>
                )
            })}
            </div>
            <div className={styles.cartGreeting}>
                <h5><strong>Subtotal: </strong>${checkout?.totalPrice}</h5>
                <p>Taxes and shipping calculated at checkout</p>
                <div>
                    <button onClick={() => navigate(-1)}>
                        Continue Shopping
                    </button>
                </div>
                <div>
                    {!!checkout?.webUrl &&
                    <button onClick={() => {
                        window.location.href = checkout.webUrl
                    }}>Checkout</button>
                    }

                </div>
            </div>
            <div className={styles.cartFooter}>


            </div>
        </section>
    )
}
export default CartContents