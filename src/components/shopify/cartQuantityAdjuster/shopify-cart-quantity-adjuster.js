import React from "react"

import {AdjustDecrement, AdjustIncrement, CurrentQuantity, QuantityAdjuster} from "./styles";

const CartQuantityAdjuster = ({item, onAdjust}) => {
   const {quantity} = item
    const handleDecrementQuantity = () => {
       onAdjust({variantId: item.variant.id, quantity: -1})
    }
    const handleIncrementQuantity = () => {
        onAdjust({variantId: item.variant.id, quantity: 1})
    }
    return(
        <QuantityAdjuster>
            <AdjustDecrement onClick={handleDecrementQuantity} onKeyPress={handleDecrementQuantity} role={`button`} tabIndex={0}>-</AdjustDecrement>
            <CurrentQuantity>{quantity}</CurrentQuantity>
            <AdjustIncrement onClick={handleIncrementQuantity} onKeyPress={handleIncrementQuantity} role={`button`} tabIndex={0}>+</AdjustIncrement>
        </QuantityAdjuster>
    )
}

export default CartQuantityAdjuster