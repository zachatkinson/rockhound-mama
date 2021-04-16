import styled from "styled-components"

export const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
  outline: none;
  padding: 0 10px;
  line-height: 2.5rem;
  font-size: 16px;
  box-shadow: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #000;
  background: #fff;
  border: 2px solid #000;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:focus:not(:disabled), &:hover:not(:disabled){
    background: black;
    color: white;
  }
  &:active:not(:disabled){
    background: #bbee89;
    transition: none;
  }
  &:disabled{
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`
export const SearchForm = styled.form`
    display: flex;
    margin-bottom: 0px;
`
export const SearchInput = styled.input`
    border-radius: 0;
    border-left: 2px solid #000;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    border-right: none;
    height: 2.5rem;
    box-sizing: border-box;
    min-width: 0;
`