import React from "react"
import CartContext from "../context/CartContext"

import CartQuantityAdjuster from "../cartQuantityAdjuster/shopify-cart-quantity-adjuster";

import {Link} from "gatsby"
import "gatsby-image"
import RemoveLineItem from "../removeLineItem/shopify-remove-line-item";

import {navigate} from "@reach/router";

import {CartFooter, CartGreeting, CartHeading, CartItem, ItemDetails, ItemGrid, ItemPic, ItemPrice, ItemProductInfo, ItemTitle, VariantTitle} from "./styles"



const CartContents = () => {
    const {checkout, updateLineItem} = React.useContext(CartContext)
    const handleAdjustQuantity = ({quantity, variantId}) => {
        updateLineItem({quantity, variantId})
    }
    return (
        <section>
            <CartGreeting>
                <h1>Your Cart</h1>
                <Link to={`/`}><p>Continue Shopping</p></Link>
            </CartGreeting>
            <ItemGrid>
                <CartHeading>
                    <div>
                        Product
                    </div>
                    <div>
                        Price
                    </div>
                </CartHeading>

            {checkout?.lineItems?.map(lineItem => {
                return (
                    <CartItem key={lineItem.variant.id}>
                        <ItemProductInfo>
                            <ItemPic>
                                <img src={lineItem.variant.image.src} width={`60`} height={`60`} alt={lineItem.title}/>
                            </ItemPic>
                            <ItemDetails>
                                <ItemTitle>
                                    <h6>{lineItem.title}</h6>
                                    {(lineItem.variant.title !== "Default Title") &&
                                    <VariantTitle>Style: {lineItem.variant.title}</VariantTitle>
                                    }
                                    <RemoveLineItem  lineItemId={lineItem.id} />
                                </ItemTitle>
                            </ItemDetails>
                        </ItemProductInfo>
                        <ItemPrice>
                            <p>${lineItem.variant.price}</p><br />
                            Quantity:
                                <CartQuantityAdjuster item={lineItem} onAdjust={handleAdjustQuantity} />
                                <p>Total: ${(lineItem.variant.price * lineItem.quantity).toFixed(2)}</p>
                        </ItemPrice>

                    </CartItem>
                )
            })}
            </ItemGrid>
            <CartGreeting>
                <h5><strong>Subtotal: </strong>${checkout?.totalPrice}</h5>
                <p>Taxes and shipping calculated at checkout</p>

            </CartGreeting>
            <CartFooter>

                    <button onClick={() => navigate(-1)}>
                        Continue Shopping
                    </button>

                    {!!checkout?.webUrl &&
                    <button onClick={() => {
                        window.location.href = checkout.webUrl
                    }}>Checkout</button>
                    }


            </CartFooter>
        </section>
    )
}
export default CartContents