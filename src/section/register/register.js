import style from './register.module.css'
import Form from '../../component/form/form'

export default function RegisterSection () {

    return(
        <div className={style.wrapper}>

            <div className={style.leftSec}>
                {/* LEFT SEC */}
            </div>
            <div className={style.rightSec}>
                <Form/>
            </div>

        </div>
    )
}