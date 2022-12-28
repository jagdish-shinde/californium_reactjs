import './imageReflector.css'
import Button from '../button/button'
import {useState} from 'react'


export default function ImageReflector () {
    const defaultImageUrl = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const [dogPic , setDogPic] = useState(defaultImageUrl)


    async function getNewDogPic () {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const imageData = await response.json()

        const {
            message : newPic
        } = imageData || {}

        setDogPic(newPic)  
    }

    return(

        <div className = 'wrapper'>
            <div className = 'imageWrapper'>
                <img 
                    src = {dogPic}
                    alt = 'Dog pic'
                    height = '100%'
                    width = '100%'
                />
            </div>
            <div className = 'buttonWrapper'>
                <Button 
                    onClickAction = {getNewDogPic}
                    buttonText = {'Get New Image'}
                    />
            </div>
        </div>
    )
}