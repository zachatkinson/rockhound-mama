import React from "react"
import {FaShoppingCart} from "react-icons/all"
import CartContext from "../context/CartContext";
import styles from "./cart.module.scss"

const Cart = () => {
    const {checkout} = React.useContext(CartContext)
    let totalQuantity = 0
    if({checkout}){
        checkout.lineItems.forEach(lineItem => {
            totalQuantity = totalQuantity + lineItem.quantity
        })
    }
    return(
        <div className={styles.cartWrap}>
            <FaShoppingCart size ={`1.5rem`} />
            <span className={styles.cartCounts}>{totalQuantity} item(s) / ${checkout?.totalPrice || `0.00`}</span>
        </div>
    )
}



export default Cart