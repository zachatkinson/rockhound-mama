import styled from "styled-components"
import {Link} from "gatsby"

export const CollectionCardContent = styled.div`
    width: 100%;
    color: #fff;
    min-height: 33vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0, 0.2);
    @media (min-width: 1200px) {
        min-height: 25vw;
    }
`

export const CollectionCardTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1.4rem;
    text-align: center;
`
export const CollectionCardViewButton = styled(Link)`
    border-radius: 2px;
    border: 2px solid #fff;
    padding: 0.5rem;
    text-transform: uppercase;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    text-decoration: none;
    color: white;
    transition: background-color 0.5s ease-in-out;
    &:hover {
        mix-blend-mode: screen; /* This makes the cutout text possible */
        color: black;
        background-color: white;
    }
`

export const CollectionCardWrap = styled.div`
    flex-grow: 1;
    flex-basis: 100%;
    @media (min-width: 576px) {
        flex-basis: 50%;
    }
    @media (min-width: 1200px) {
        flex-basis: 25%;
    }
`

