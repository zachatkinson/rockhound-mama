import React from "react"
import {CheckboxWrapper} from './styles'

import {FaCheck} from "@react-icons/all-files/fa/FaCheck";

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