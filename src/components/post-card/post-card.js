import style from './post-card.module.css'
import profile from '../../../src/images/dummyProfile.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FooterIcons from '../../atoms/footer-icons/footer-icons';
import { Fragment } from 'react';

export default function PostCard({userProfileInfo}) {
   
    const {
        name = '',
        handlerName = '',
        organization = '',
        tweets = [],
        profilePic
    } = userProfileInfo || {}

    if(!tweets.length){    
        return null
    }

    return (
        <Fragment>
        { 
            tweets.map((tweet,index) => (

            <div className={style.wrapper}>

            <div className={style.cardWrapper}>
                <img
                    src={profilePic}
                    className={style.imgWrapper}
                />
                <div className={style.nameWrapper}>
                    <p className={style.name}>{name}</p>
                    <p className={style.name}>{handlerName}</p>
                </div>
                <MoreHorizIcon
                    className={style.moreIcon}
                />
            </div>

            <div className={style.container}>
                <p className={style.tweetText}>
                    <Fragment>
                        <p>{tweet.tweetText}</p>
                        <p>{organization}</p>
                    </Fragment>
                </p>
            { tweet.refRenceLink && <a
                    href='https://www.google.com' 
                    style={{ textDecoration: 'none' }} 
                    target='_blank'>
                    https://www.google.com
                </a>}
            </div>

            <div className={style.hashtags}>
                {  [...tweet.hastags? [tweet.hastags] : []].map(tag => (
                    <span>{tag}</span>
                ))}
            </div>

            {tweet.tweetPic && <div
                className={style.tweetPic}
            >
                <img
                    src = {tweet.tweetPic}
                    height='100%'
                    width='100%'
                />
            </div>}

            <FooterIcons  
                data = {tweet}
            />
        </div>

        ))
        }

        </Fragment>

    )
}