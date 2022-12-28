import './button.css'


export default function Button ({onClickAction,buttonText}) {

    return(
        <button 
            className = 'getNewImageBtn'
                onClick={onClickAction}
            >
            {buttonText || 'Submit'}
        </button>
    )
}