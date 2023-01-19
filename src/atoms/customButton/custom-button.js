import style from './custom-button.module.css'


export default function CustomButton ({
    buttonText = '',
    customCss ,
    isDarkBtnRequired ,
    hanldleClickBtn
}) {

    return(
        <button 
            className={`${isDarkBtnRequired ? style.darkButtonStyle : style.faintBtnStyle} ${customCss}`}
            onClick = {hanldleClickBtn}
        >
            {buttonText || 'Next'}
        </button>
    )
}