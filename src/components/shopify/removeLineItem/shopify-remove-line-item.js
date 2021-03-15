import React from "react"
import CartContext from "../context/CartContext";

import styles from "./shopify-remove-line-item.module.scss"

const RemoveLineItem = ({lineItemId}) => {
    const {removeLineItem} = React.useContext(CartContext)
    const handleClick = () => {
        removeLineItem(lineItemId)
    }
    return(
        <div className={styles.removeButton} onClick = {handleClick}>
            Remove
        </div>
    )
}

export default RemoveLineItem