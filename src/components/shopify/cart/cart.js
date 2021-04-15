import React from "react"
import {FaShoppingCart} from "react-icons/all"
import CartContext from "../context/CartContext";

import {CartIcon, QuantityIcon, CartWrap, CartCounts} from "./styles"


const Cart = () => {
    const {checkout} = React.useContext(CartContext)
    let totalQuantity = 0
    if(checkout){
        checkout.lineItems.forEach(lineItem => {
            totalQuantity += lineItem.quantity
        })
    }
    return(
        <CartWrap>
            <CartIcon>
                <FaShoppingCart size ={`1.5rem`} /><QuantityIcon>{totalQuantity}</QuantityIcon>
            </CartIcon>
            <CartCounts> ${checkout?.totalPrice || `0.00`}</CartCounts>
        </CartWrap>
    )
}



export default Cart