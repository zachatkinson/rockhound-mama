import React from "react"
import CartContext from "../context/CartContext";

import styles from "./shopify-remove-line-item.module.scss"

const RemoveLineItem = ({lineItemId}) => {
    const {removeLineItem} = React.useContext(CartContext)
    const handleClick = () => {
        removeLineItem(lineItemId)
    }
    return(
        <div className={styles.removeButton} onClick = {handleClick} onKeyPress={handleClick} role={`button`} tabIndex={0}>
            Remove
        </div>
    )
}

export default RemoveLineItem