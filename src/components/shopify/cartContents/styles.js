import styled from "styled-components"

export const CartFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CartGreeting = styled.div`
    text-align: center;
    > h1 {
        margin-bottom: 0.1rem;
    }
`

export const CartHeading = styled.div`
    display: grid;
    font-weight: bold;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid #222;
    margin-bottom: 1rem;
`

export const CartItem = styled.div`
    border-bottom: 1px solid #ccc;
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`

export const ItemDetails = styled.div`
    padding-left: 0.25rem;
    padding-right: 0.25rem;
`

export const ItemGrid = styled.div`
    margin: 1rem;
`

export const ItemPic = styled.div`
    > img {
        margin-bottom: 0px;
    }
`
export const ItemPrice = styled.div`
    text-align: right;
`

export const ItemProductInfo = styled.div`
    display: flex;
`

export const ItemTitle = styled.div`
    > h6 {
        margin-bottom: 0px;
    }
`

export const VariantTitle = styled.p`
    font-size: 80%;
    font-style: italic;
    color: #444;
    margin-bottom: 0;
`
