import style from './whom-to-follow.module.css'
import Follow from '../../atoms/follow-suggestion/follow'
import { userProfiles } from '../../const'
import { useState } from 'react'

export default function WhomeToFollow () {
    const [followData , setFollowData] = useState(userProfiles.slice(0,2))
    const [isAskedforAllData , setIsAskedforAllData] = useState(false)

    // 
    function hanldeClickShowMore () {
        setIsAskedforAllData(!isAskedforAllData)
        if(isAskedforAllData){
            return setFollowData(userProfiles.slice(0,2))
        }
        setFollowData(userProfiles)
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