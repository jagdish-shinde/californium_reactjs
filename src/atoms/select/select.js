import { useState } from 'react'
import style from './select.module.css'

export default function Select ({slectData ,handleOnSelect}) {

    // const [selectedOption , setSelectedOption] = useState('')

    return (
        <select 
            className={style.select}
            onChange = {(e) => handleOnSelect(e.target.value)}
            // value = {selectedOption}
        
            >
                <option disabled selected>Gender</option>

            {
                slectData.map((option) => (
                    <option key = {option}>
                        {option}
                    </option>
                ))
            }

        </select>
    )
}
