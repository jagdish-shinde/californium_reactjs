import style from './post-card.module.css'
import profile from '../../../src/images/dummyProfile.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FooterIcons from '../../atoms/footer-icons/footer-icons';
// BiMessageRounded

export default function PostCard({postDetails}) {

    const {
        name = '',
        handlerName = '',
        organization = '',
        tweets
    } = postDetails || {}

    const {
        tweetText,
        tweetPic,
        tweetCount,
        retweetCount,
        likesCount,
        viewsCount,
        hastags  = [],
        // TweetReplies
    } = tweets[0] || {}

    const dataForFooterIcon = {
        tweetCount,
        retweetCount,
        likesCount,
        viewsCount,
    }

    return (
        <div className={style.wrapper}>

            <div className={style.cardWrapper}>
                <img
                    src={profile}
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
                    {tweetText}
                    {organization}
                </p>
                <a
                    href='https://www.google.com' 
                    style={{ textDecoration: 'none' }} 
                    target='_blank'>
                    https://www.google.com
                </a>
            </div>

            <div className={style.hashtags}>
                {hastags.map(tag => (
                    <span>{tag}</span>
                ))}
            </div>

            <div
                className={style.tweetPic}
            >
                <img
                    src = {tweetPic}
                    height='100%'
                    width='100%'
                />
            </div>

            <FooterIcons  
                data = {dataForFooterIcon}
            />
        </div>
    )
}