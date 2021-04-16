import styled from "styled-components"

export const CategoryList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1rem;
    @media (min-width: 512px) {
    grid-template-columns: 1fr 1fr 1fr; 
    }
    @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;  
    }
    @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`

export const FilterBox = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: 1fr;
`
