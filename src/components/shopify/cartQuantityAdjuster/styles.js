import styled from "styled-components"

export const AdjustButton = styled.div`
    border: 2px solid #000;
    padding: 0.5rem;
    cursor: pointer;
    transition: 1s all;
    &:hover{
    background: #000;
      color: #fff;
    }

`
export const AdjustIncrement = styled(AdjustButton)`
    &:active
    {
      background: #bbee89;
      transition: none;
    }
`

export const AdjustDecrement = styled(AdjustButton)`
    &:active
    {
      background: #ff0000;
      transition: none;
    }
`

export const CurrentQuantity = styled.div`
border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    padding: 0.5rem;`

export const QuantityAdjuster = styled.div`
    display: flex;
    justify-content: flex-end;
`
