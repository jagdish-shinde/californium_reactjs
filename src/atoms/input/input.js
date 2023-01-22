import style from './input.module.css'

export default function Input ({placeholder ,type ,handleOnChnage ,value}) {



    return(
        <input 
            className={style.input}
            placeholder = {placeholder || 'Name'}
            type = {type || 'text'}
            onChange = {(e) =>handleOnChnage(e.target.value) }
            value = {value}

        />
    )
}