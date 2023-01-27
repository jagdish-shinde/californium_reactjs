import style from './follow.module.css'
import profile from '../../images/dummyProfile.jpeg'
import Button from '../../atoms/customButton/custom-button'
import { useState } from 'react'
export default function Follow ({data}) {
    const [isFollowed , setIsFollowed] = useState(false)

    const {
        name,
        handlerName ,
    } = data || {}
    return(
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>
                <img
                    src = {profile}
                    alt = 'profilePic'
                    height='100%'
                    width= '100%'
                />
            </div>
            <div className={style.names}>
                <span>{name}</span>
                <span>{handlerName}</span>
            </div>
           <Button 
                customCss={style.FollowBtn}
                isDarkBtnRequired
                buttonText={isFollowed ? 'Following' : 'Follow'}
                hanldleClickBtn = {
                    () => setIsFollowed (!isFollowed)
                }
           />

        </div>
    )
}