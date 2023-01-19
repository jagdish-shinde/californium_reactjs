import style from './custom-input.module.css'

export default function CustomInputField (
    {
        placeholder,
        handleOnChange ,
        type ,
        customStyleInput ,
        value
    }
) {
    return(
        <input 
            placeholder={placeholder}
            onChange = {(e) => handleOnChange(e.target.value)}
            type = {type || 'text'}
            className = {`${style.inputField} ${customStyleInput}`}
            value = {value}
        />
    )
}