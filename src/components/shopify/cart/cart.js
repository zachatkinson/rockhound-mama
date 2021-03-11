import React from "react"
import {FaShoppingCart} from "react-icons/all"
import CartContext from "../context/CartContext";
import styles from "./cart.module.scss"

const Cart = () => {
    const {checkout} = React.useContext(CartContext)
    let totalQuantity = 0
    if(checkout){
        checkout.lineItems.forEach(lineItem => {
            totalQuantity += lineItem.quantity
        })
    }
    return(
        <div className={styles.cartWrap}>
            <div className={styles.cartIcon}>
            <FaShoppingCart size ={`1.5rem`} /><sub className={styles.quantityIcon}>{totalQuantity}</sub>
            </div>
            <div className={styles.cartCounts}> ${checkout?.totalPrice || `0.00`}</div>
        </div>
    )
}



export default Cart