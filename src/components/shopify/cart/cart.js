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
            <FaShoppingCart size ={`1.5rem`} /><sub className={styles.quantityIcon}>{totalQuantity}</sub>
            <span className={styles.cartCounts}> ${checkout?.totalPrice || `0.00`}</span>
        </div>
    )
}



export default Cart