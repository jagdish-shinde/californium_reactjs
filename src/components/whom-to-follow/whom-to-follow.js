import style from './whom-to-follow.module.css'
import Follow from '../../atoms/follow-suggestion/follow'
import { postData } from '../../const'
import { useState } from 'react'

export default function WhomeToFollow () {
    const [followData , setFollowData] = useState(postData.slice(0,2))
    const [isAskedforAllData , setIsAskedforAllData] = useState(false)

    // 
    function hanldeClickShowMore () {
        setIsAskedforAllData(!isAskedforAllData)
        if(isAskedforAllData){
            return setFollowData(postData.slice(0,2))
        }
        setFollowData(postData)
    }
    return(
        <div className={style.wrapper}>
            <h3 className={style.head}>Whom to follow</h3>
            {
                followData.map(data => (
                    <Follow 
                        data = {data}
                    />
                ))
            }
            <p 
                onClick={hanldeClickShowMore}
                className = {style.ShowMoreText}
                > 
                {isAskedforAllData ? 'Show less':'show more'}
            </p>
        </div>
    )
}