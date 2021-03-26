import React from "react"
import {FaCheck} from "react-icons/all";
import {CheckboxWrapper} from './styles'

const Checkbox = ({checked}) => {
    return(
        <CheckboxWrapper checked={checked}>
            <div>
                <FaCheck color={`white`} />
            </div>
        </CheckboxWrapper>
    )
}

export default Checkbox