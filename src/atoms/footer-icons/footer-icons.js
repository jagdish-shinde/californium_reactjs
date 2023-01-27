import style from './footer-icons.module.css'
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import {FcLike} from 'react-icons/fc'
import {GoGraph} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import { useState } from 'react';


// FaRetweet


export default function FooterIcons ({data}) {
    const [isLikesPost,setIsLikedPost] = useState(false)
    const {
        tweetCount,
        retweetCount,
        likesCount,
        viewsCount,
    } = data || {}
    const likeIcon  = isLikesPost ?  
    <FcLike className={style.like}/> :
     <AiOutlineHeart className={style.like}/>

    const  iconsData = [
        {
            icon : <BiMessageRounded 
            className={style.reply}/>,
            count : tweetCount
        },
        {
            icon :  <FaRetweet 
            className={style.retweet}/>,
            const : retweetCount
        },
        {
            icon : likeIcon ,
            count : likesCount ,
            action : 'likedTweet'
        },
        {
            icon : <GoGraph 
            className={style.stats}/>,
            count : viewsCount
        }  
    ]
    function handleClickAction (action) {
        if(action === 'likedTweet') {
            setIsLikedPost(!isLikesPost)
        }
    }
    return(
        <div className={style.wrapper}>
            {
                iconsData.map(({icon,count,action} )=> (
                    <div className={style.counts}>
                        <span 
                            onClick = {()=>handleClickAction(action)}
                            className={style.icon }>
                                {icon}
                        </span>
                        {count}
                    </div>
                ))
            }

        </div>
    )
}