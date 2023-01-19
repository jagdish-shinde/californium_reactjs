import style from './signing-option.module.css'
import { FcGoogle } from "react-icons/fc";


export default function SigningOption ({optionDetail}) {

    const {
        icon  = '' ,
        signInText = '',
        stylingData 
    } = optionDetail || {}

    const {textStyle} = stylingData || {}

    return(
        <div className={style.wrapper}>
            {icon}
            <p className={`${style.optionText} ${textStyle}`}>
                {signInText}
            </p>
        </div>
    )
}