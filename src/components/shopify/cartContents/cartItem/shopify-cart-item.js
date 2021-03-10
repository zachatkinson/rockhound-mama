import React from "react"
import Img from "gatsby-image"

import styles from "./shoify-cart-item.module.scss"

const CartItem = ({item}) => {
    return(
        <div className={styles.cartItem}>
            <div className={`itemPic`}>
            <img src={item.variant.image.src} width={`150`} height={`150`} />
            </div>
            <div className={`itemDetails`}>
                <div className={styles.itemTitle}>
                    <h4>{item.title}</h4>
                    {(item.variant.title != "Default Title") &&
                    <p>Style: {item.variant.title}</p>
                    }
                </div>
                <div className={`itemPrices`}>
                    <p>${item.variant.price}</p>
                    {item.quantity}
                    ${(item.variant.price * item.quantity).toFixed(2)}
                </div>

            </div>
        </div>
    )
}
export default CartItem