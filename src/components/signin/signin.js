import style from './signin.module.css'

import { SigningTemplate } from '../../templates/signing-template/signing-template';
import CustomInputField from '../../atoms/custom-input/custom-input';
import CustomButton from '../../atoms/customButton/custom-button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { isUserLoggedInAtom } from '../../recoil-states';
import { useSetRecoilState } from 'recoil';

export default function SignInComponent () {

    const [signInInput , setSignInInput] = useState('')
    const [password , setPassword] = useState('')
    const [isAskingPassword , setIsAskingPassword] = useState(false)

    const nevigate = useNavigate()
    const setUserLoggedInStatus = useSetRecoilState(isUserLoggedInAtom)


    const handleSignInInput = (inputVal) => {
        setSignInInput(inputVal)
    }
    const handlePassword = (inputPassword) => {
        setPassword(inputPassword)
    }
    function handleClickButton () {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if(!userData){
            alert('No user exist !')
            return
        }


        if(!signInInput) {
            alert('please Enter Email or Phone to continue !!')
            return
        }

        if(signInInput && !isAskingPassword){
            setIsAskingPassword(true)
            return
        }
        if(!password){
            alert('Please add pasword to continue !!')
            return
        }

        const {
            password : savedPassword ,
            email ,
            phone
        } = userData || {}

        if(email && signInInput!==email){
            alert('No such user exist , please signUp to start !!')
            return
        }
        if(phone && signInInput !== phone) {
            alert('No such user exist , please signUp to start !!')
            return
        }
        if(password !== savedPassword){
            alert('Wrong password !!')
            return
        }
        setUserLoggedInStatus(true)
        nevigate('/')
    }

    return(
        <SigningTemplate 
            isSignInPage
        >
           {!isAskingPassword &&  <CustomInputField 
                placeholder = 'Phone or Email'
                handleOnChange = {handleSignInInput}
            />}
           {isAskingPassword &&  <CustomInputField 
                placeholder = 'Password'
                handleOnChange = {handlePassword}
                type = 'password'
            />}
            <CustomButton
                customCss = {style.nextBtn}
                isDarkBtnRequired
                hanldleClickBtn = {handleClickButton}
                buttonText = {isAskingPassword ? 'Submit' : 'Next'}
            />
            <CustomButton
                buttonText = 'Forget Password ?'
                customCss = {style.nextBtn}
            />
        </SigningTemplate>
    )
}