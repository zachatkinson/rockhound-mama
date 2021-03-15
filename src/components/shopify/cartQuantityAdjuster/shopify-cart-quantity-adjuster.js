import React from "react"
import styles from "./shopify-cart-quantity-adjuster.module.scss"

const CartQuantityAdjuster = ({item, onAdjust}) => {
   const {quantity} = item
    const handleDecrementQuantity = () => {
       onAdjust({variantId: item.variant.id, quantity: -1})
    }
    const handleIncrementQuantity = () => {
        onAdjust({variantId: item.variant.id, quantity: 1})
    }
    return(
        <div className={styles.quantityAdjuster}>
            <div className={styles.decrementQuantity} onClick={handleDecrementQuantity} onKeyPress={handleDecrementQuantity} role={`button`} tabIndex={0}>-</div>
            <div className={styles.currentQuantity}>{quantity}</div>
            <div className={styles.incrementQuantity} onClick={handleIncrementQuantity} onKeyPress={handleIncrementQuantity} role={`button`} tabIndex={0}>+</div>
        </div>
    )
}

export default CartQuantityAdjuster