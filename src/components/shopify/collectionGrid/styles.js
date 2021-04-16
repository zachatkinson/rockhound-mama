import styled from "styled-components"

export const AllCollections = styled.div`
    display: flex;
    flex-direction: column;
`
export const RemainingCollections = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;

  }
`
