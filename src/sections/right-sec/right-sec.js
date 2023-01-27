import style from './right-sec.module.css'
import Searchbar from '../../components/searchbar/searchbar'
import WhatsHappening from '../../components/whats-happening/whats-happening'
import WhomeToFollow from '../../components/whom-to-follow/whom-to-follow'


export default function RightSec () {
    return(
        <div className={style.rightSec}>
            <Searchbar/>
            <WhatsHappening/>
            <WhomeToFollow/>
        </div>
    )
}