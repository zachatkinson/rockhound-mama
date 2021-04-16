import React from "react"
import Checkbox from "../../../checkbox/checkbox";
import {navigate, useLocation} from "@reach/router"
import queryString from 'query-string'
import {CategoryItemWrap} from "./styles";


const CategoryFilterItem = ({title, id}) => {
    const {search} = useLocation()
    const qs = queryString.parse(search)
    const collectionIds = qs.c?.split(',').filter(c => !!c) || []
    const checked = collectionIds?.find(collectionId => collectionId === id)
    const searchTerm = qs.s

    const onClick = () => {
        let navigateTo = '/all-products'


        let newIds = []

        if(checked){
            newIds = collectionIds.filter(collectionId => collectionId !== id).map(collectionId => encodeURIComponent(collectionId))
        }
        else{
            collectionIds.push(id);
            newIds = collectionIds.map(collectionId => encodeURIComponent(collectionId))

        }
        if(newIds.length && !searchTerm){
            navigate(`${navigateTo}?c=${newIds.join(',')}`)
        }else if(newIds.length && searchTerm){
            navigate(`${navigateTo}?c=${newIds.join(',')}&s=${encodeURIComponent(searchTerm)}`)
        }else if(!newIds.length && searchTerm){
            navigate(`${navigateTo}?s=${searchTerm}`)
        }
        else{
            navigate(`${navigateTo}`)
        }


    }
    return (
    <CategoryItemWrap onClick={onClick} onKeyPress={onClick} role={`button`} tabIndex={0}>
        <Checkbox checked={collectionIds.find(cId => cId === id )}  />
        <div>{title}</div>
    </CategoryItemWrap>
    )
}

export default CategoryFilterItem