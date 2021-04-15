import React from "react"
import {CheckboxWrapper} from './styles'

const Checkbox = ({checked}) => {
    return(
        <CheckboxWrapper checked={checked}>
            <div>
               Check
            </div>
        </CheckboxWrapper>
    )
}

export default Checkbox