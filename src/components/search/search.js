import React from "react"
import {FaSearch} from "@react-icons/all-files/fa/FaSearch";
import {navigate, useLocation} from "@reach/router";
import queryString from "query-string"

import {SearchButton, SearchForm, SearchInput} from "./styles"
const Search = () => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const {search} = useLocation()
    const c = queryString.parse(search)?.c  || ''
    const handleSubmit = e => {
        e.preventDefault()
        if(c){
            navigate(`/all-products?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(c)}`)
        }else {
            navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`)
        }
    }
    return (
    <SearchForm onSubmit={handleSubmit}>
        <SearchInput value={searchTerm} className={`search`} placeholder={`Search`} onChange={(e) => setSearchTerm(e.currentTarget.value)}  />
        <SearchButton aria-label={`Search Button`}>
            <FaSearch />
        </SearchButton>
    </SearchForm>
)
}

export default Search