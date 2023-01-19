import style from './custom-select.module.css'

export default function CustomSelect ({data,handleSelect,defaultOption}) {

    return (
        <select 
            className={style.select}
            onChange = {(e) => handleSelect(e.target.value)}
        >
            <option selected disabled>{defaultOption}</option>
            {
                data.map(ele => (
                    <option>
                        {ele}
                    </option>
                ))
            }
             
        </select>
    )
}