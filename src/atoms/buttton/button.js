import buttonStyle from './button.module.css'

export default function Button ({custonStyle ,buttonTetx ,handleSubmit}) {

return(

    <button 
        className={`${buttonStyle.button} ${custonStyle}`}
        onClick = {handleSubmit}
        >
        {buttonTetx || 'Next'}
    </button>
)
}