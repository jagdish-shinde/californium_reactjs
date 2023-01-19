import { Dialog } from '@mui/material'
import style from './signup-form.module.css'
import CustomInputField from '../../atoms/custom-input/custom-input'
import { useState } from 'react'
import CustomSelect from '../../atoms/custom-select/custom-select'
import { 
    yearArray,
    monthArray,
    dateArray
 } from '../../const'
import CustomButton from '../../atoms/customButton/custom-button'
import { 
    isValidEmailSyntax ,
    isValidMobile,
    isOnlyLetters,
    isValidString
 } from '../../helper'
 import {useNavigate} from 'react-router-dom'
 import { isUserLoggedInAtom } from '../../recoil-states'
import { useSetRecoilState } from 'recoil'

export default function SignupForm () {

    const [name , setName] = useState('')
    const [phone , setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [date , setDate] = useState('')
    const [month , setMonth] = useState('')
    const [year , setYear] = useState('')
    const [password,setPassword] = useState('')
    const [isShowingEmailField , setIsShowingEmailField] = useState(false)

    const nevigate = useNavigate()
    const setUserLoginStatus = useSetRecoilState(isUserLoggedInAtom)

    function handleName (inputName) {
        setName(inputName)
    }
    function handlePhone (inputPhone) {
        setPhone(inputPhone)
    }
    function handleEmail (inputEmail) {
        setEmail(inputEmail)
    }
    function handleDate (inputDate) {
        setDate(inputDate)
    }
    function handleMonth (inputMonth) {
        setMonth(inputMonth)
    }
    function handleYear (inputYear) {
        setYear (inputYear)
    }
    function handlePassword (inputPass) {
        setPassword(inputPass)
    }

    function handleSubmit (){

        if(!isValidString(name) || !isOnlyLetters(name)){
            alert('Invalid name !!')
            return
        }
        if(!email && !phone){
            alert('Please add email or phone to continue !!')
            return
        }
        if(email && !isValidEmailSyntax(email)){
            alert('Please add proper Email !!')
            return
        }
        if(phone && !isValidMobile(phone)){
            alert('Please add proper phone !!')
            return
        }
        if(!isValidString(password)){
            alert('please set your account password !!')
            return
        }
        if(!isValidString(date) || !isValidString(month) || !isValidString(year)){
            alert('Invalid Date !!')
            return
        }


        const userData = {
            name ,
            ...(phone && {phone}),
            ...(email && {email}),
            password,
            dateOfBirth : `${date + '/' + month + '/' + year}`
        }
        localStorage.setItem('userData',JSON.stringify(userData))
        setUserLoginStatus(true)
        nevigate('/')
        

    }
    function handleToggleAlternateField () {
        setIsShowingEmailField(!isShowingEmailField)
        setEmail('')
        setPhone('')
    }

    return (
        <Dialog 
            open
            PaperProps={{
                style: {
                    borderRadius : 20
                }
              }}
        >
            <div className={style.wrapper}>
                <h2>
                    Create Your Account
                </h2>
                <CustomInputField 
                    customStyleInput = {style.inputCss}
                    placeholder = 'Name'
                    handleOnChange = {handleName}
                />

               { isShowingEmailField ?  <CustomInputField 
                    customStyleInput = {style.inputCss}
                    placeholder = 'Email'
                    handleOnChange = {handleEmail} 
                    value = {email}
                    
                /> :
                 <CustomInputField 
                    customStyleInput = {style.numberInput}
                    placeholder = 'Phone'
                    handleOnChange = {handlePhone} 
                    type = 'number'
                    value={phone}

                />}
                
                <p style={{
                    textAlign : 'end',
                    color : '#00acee',
                    fontWeight : 700 ,
                    margin : 0 ,
                    cursor : 'pointer'
                }}
                onClick = {handleToggleAlternateField}
                >
                    Use {`${isShowingEmailField ? 'Phone' : 'Email'}`} Instead
                </p>

                <CustomInputField 
                    customStyleInput = {style.inputCss}
                    placeholder = 'Password'
                    handleOnChange = {handlePassword}
                    type = 'password'
                />

                <p className={style.birthHeading}>
                    Date of Birth
                </p>
                <p className={style.birthDateInstruction}>
                    This will not be shown publicly. 
                    Confirm your own age, even if this account is for a business, a pet, or something else.
                </p>
                <div className={style.selectWrapper}>
                    <CustomSelect 
                        data = {dateArray}
                        handleSelect = {handleDate}
                        defaultOption = 'Date'
                    />
                    <CustomSelect 
                        data = {monthArray}
                        handleSelect = {handleMonth}
                        defaultOption = 'Month'
                    />
                    <CustomSelect 
                        data = {yearArray}
                        handleSelect = {handleYear}
                        defaultOption = 'Year'
                    />

                </div>
                <CustomButton 
                    isDarkBtnRequired
                    customCss = {style.submitBtn}
                    buttonText = 'Submit'
                    hanldleClickBtn={handleSubmit}
                />
               
            </div> 
        </Dialog>
    )
}