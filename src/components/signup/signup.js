import style from './signup.module.css'
import { SigningTemplate } from '../../templates/signing-template/signing-template'
import CustomButton from '../../atoms/customButton/custom-button'
import { useState } from 'react'
import SignupForm from '../signup-form/signup-form'

export default function SignUpComponent () {

    const [isRequestingSignUp , setIsRequestingSignUp] = useState(false)

    function handleClick () {
        setIsRequestingSignUp(true)
    }

    if(isRequestingSignUp){
        return (
            <SignupForm/>
        )
    }

    return (
        <SigningTemplate>
            <CustomButton   
                buttonText = 'Sign Up With Email Or Phone'
                customCss = {style.buttonStyle}
                isDarkBtnRequired 
                hanldleClickBtn = {handleClick}
            />
            <p className={style.ConditionText}>
                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
            </p>
        </SigningTemplate>
    )
}