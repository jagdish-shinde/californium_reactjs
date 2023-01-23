
import style from './components.module.css'
import { profileDataAtom } from '../recoil-states'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'



export default function ProfileCard ({profileData}) {

    const setProfileData = useSetRecoilState(profileDataAtom)
    const nevigate = useNavigate()

    const {
        name ,
        handlerName ,
        tweetText ,
        tweetPic ,
        followers ,
        followings ,
        id
    } = profileData || {}

    function handleOnClickProfile () {
        nevigate('/profilePage')
        setProfileData(profileData)
    }

    return(
        <div className={style.wrapper}>


            <div 
                className={style.imgWrapper}
                    onClick = {handleOnClickProfile}
                >
                <img
                    src = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
                    height = '50px'
                    width = '50px'
                    alt = 'Pic'
                    className={style.image}
                />
                <p>
                    {name}{handlerName}
                </p>
                <strong>
                    {id}
                </strong>

            </div>


            <p className={style.text}>{tweetText}</p>
            <div>
                <p>
                    followers : {followers}
                </p>
                <p>
                    following : {followings}
                </p>
            </div>


        </div>
    )
}