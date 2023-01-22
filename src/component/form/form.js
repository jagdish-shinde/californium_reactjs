import style from './form.module.css'
import Input from '../../atoms/input/input'
import Select from '../../atoms/select/select'
import { genderOptions } from '../../const'
import Button from '../../atoms/buttton/button'
import { useDebugValue, useState } from 'react'
import { 
    isValidEmailSyntax ,
    isValidMobile,
    isValidString
} from '../../helper'




export default function Form ( ) {


        const [name,setName] = useState('')
        const [date,setDate] = useState('')
        const [email,setEmail] = useState('')
        const [phone,setPhone] = useState('')
        const [gender,setGender] = useState('')

        function handleName (inputName) {
            setName(inputName)
        }
        function handleDate (inputDate) {
            setDate(inputDate)
        }
        function handleEmail(inputEmail) {
            setEmail(inputEmail)
        }
        function hanldePhone(inputPhone) {
            setPhone(inputPhone)
        }
        function handleGender (inputGender) {
            setGender(inputGender)
        }

        const handleSubmit = () => {

             //  key : value vala variable
                //  useName : name
                //  name

            const userData = {
                name ,
                date,
                email,
                phone,
                gender
            }

            if(!isValidString(name)){
                alert('INVALI NAME !!')
                return
            }
            if(!isValidString(date)){
                alert('INVALI Date !!')
                return
            }
            if(!isValidString(gender)){
                alert('INVALI Gender !!')
                return
            }
            if(!isValidEmailSyntax(email)) {
                alert('INVALI Email !!')
                return
            }
            if(!isValidMobile(phone)) {
                alert('INVALI Mobile !!')
                return
            }

            localStorage.setItem('userData' , JSON.stringify(userData))

            alert('successful refistered !!')

            setName('')
            setDate('')
            setEmail('')
            setPhone('')
            setGender('')
        }

    return(
        <div className={style.form}>
            <h3 className={style.heading}>
                Registration Info 
            </h3>
            <Input 
                // placeholder = 'Name'
                handleOnChnage = {handleName}
                value = {name}

            
            />
            <Input 
                placeholder = 'Birth Date'
                type = 'date'
                handleOnChnage = {handleDate}
                value = {date}


            />
            <Select 
                slectData = {genderOptions}
                handleOnSelect = {handleGender}

            />
            <Input 
                placeholder = 'Email'
                handleOnChnage = {handleEmail}
                value = {email}


            />
            <Input 
                placeholder = 'Phone'
                type = 'number'
                handleOnChnage = {hanldePhone}
                value = {phone}
            />
            <Button 
                custonStyle = {style.submitBtn}
                buttonTetx = 'Submit'
                handleSubmit = {handleSubmit}
            />

            <button
                onClick={()=> {
                    localStorage.removeItem("userData");
                }}
            >
                REMOVE DATA
            </button>
        </div>
    )
}