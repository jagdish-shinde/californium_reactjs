import style from './whom-to-follow.module.css'
import Follow from '../../atoms/follow-suggestion/follow'
import { postData } from '../../const'

export default function WhomeToFollow () {
    return(
        <div className={style.wrapper}>
            <h3 className={style.head}>Whom to follow</h3>
            {
                postData.map(data => (
                    <Follow 
                        data = {data}
                    />
                ))
            }
        </div>
    )
}