import React from "react"

import styles from "./shopify-cart-item.module.scss"

const CartItem = ({item}) => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.itemProductInfo}>
                <div className={styles.itemPic}>
                    <img src={item.variant.image.src} width={`60`} height={`60`} alt={item.title}/>
                </div>
                <div className={styles.itemDetails}>
                    <div className={styles.itemTitle}>
                        <h6>{item.title}</h6>
                        {(item.variant.title !== "Default Title") &&
                        <p className={styles.styleType}>Style: {item.variant.title}</p>
                        }
                        <p>Remove</p>
                    </div>
                </div>
            </div>
            <div className={styles.itemPrices}>
                <p>${item.variant.price}<br />
                Qty: {item.quantity}<br />
                    Total: ${(item.variant.price * item.quantity).toFixed(2)}</p>
            </div>

        </div>
    )
}
export default CartItem