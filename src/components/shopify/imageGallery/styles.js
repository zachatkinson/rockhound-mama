import styled from "styled-components"

export const ThumbGrid = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
