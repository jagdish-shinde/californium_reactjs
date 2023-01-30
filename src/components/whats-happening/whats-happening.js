import style from './whats-happening.module.css'
import Trendings from '../../atoms/trendings/trendings'
import { useState } from 'react'
import {trendinsData} from '../../const'
export default function WhatsHappening () {
    // const [visibleTrends , setVisibleTrends] = useState(3)
    const [trending , setTrendings] = useState(trendinsData.slice(0,2))
    const [isShowingAllTrendings , setIsShowingAllTrendings] = useState(false)

    // handle seeAll request
    function handleRequestSeeAll () {
        setIsShowingAllTrendings(!isShowingAllTrendings)
        if(isShowingAllTrendings) {
           return setTrendings(trendinsData.slice(0,2))
        }
        setTrendings(trendinsData)
    }

    // remove not intrseted item
    function handleClickPopover (id) {
        const trendingArr = [...trending]
        trendingArr.forEach((data) => {
            if(data.id === id){
                data.isNotIntrested = true
            }
        })
        setTrendings(trendingArr)
    }

    return(
        <div className={style.wrapper}>
            <h3 className={style.heading}> What's Happeinings ?</h3>
            {
                trending.map(data => (
                   !data.isNotIntrested && <Trendings 
                        data = {data}
                        customCss = {style.trending}
                        handleClickPopover = {handleClickPopover}
                    />
                ))
            }
            { 
                trending.length && 
                <p className={style.seeAll} 
                    onClick = {handleRequestSeeAll}
                >
                    {isShowingAllTrendings ? 'Show Less' : 'Show More'} 
                </p>
            }
        </div>
    )
}