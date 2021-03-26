import styled from "styled-components"

export const CheckboxWrapper = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  background: ${props => (props.checked ? 'black' : 'none')};
  margin-right: 0.5rem;
  
  > div {
    line-height: 1;
    margin: auto;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`
