import React from "react"
import styles from "./shopify-product-quantity-adder.module.scss"
import CartContext from "../context/CartContext";

const ProductQuantityAdder = ({variantId, available}) => {
    const [quantity, setQuantity] = React.useState(1)
    const {updateLineItem} = React.useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateLineItem({variantId, quantity: parseInt(quantity, 10)})

    }
    const handleQuantityChange = (e) => {
        setQuantity(e.currentTarget.value)
    }

    return (
        <div className={`quantity-wrapper`}>
            <strong>Quantity</strong>
            <form onSubmit={handleSubmit}>
                <input
                    disabled={!available}
                    type={`number`}
                    min={`1`}
                    step={`1`}
                    className={styles.quantityInput}
                    value={quantity}
                    onChange={handleQuantityChange} />
                <button type="submit" className={styles.quantityButton}>
                    Add to cart
                </button>
            </form>
        </div>
    )
}

export default ProductQuantityAdder