import style from './table.module.css'
import { BsArrowLeftCircle , BsArrowRightCircle } from "react-icons/bs";
import { Fragment } from 'react';

export default function Table ({tabledata,handleClickButton}) {

    return(
        <div className={style.wrapper}>

            <div className={style.heaadRow}>
                <p className={style.head}>UserId</p>
                <p className={style.head}>Title</p>
                <p className={style.head}>Body</p>
            </div>

        {tabledata.map((data, index) => (
            <div className={style.container}>
                <p className={style.text}>{data.id}</p>
                <p className={style.text}>{data.title}</p>
                <p className={style.text}>{data.body}</p>
            </div>
        ))} 
        { tabledata.length > 0 && 
            <Fragment>
                <BsArrowLeftCircle 
                    className = {style.leftArrow}
                    onClick= {() => handleClickButton('backPage')}
                />
                <BsArrowRightCircle 
                    className={style.rightArrow}
                    onClick= {() => handleClickButton('nextPage')}
                />
            </Fragment>}
        </div>        

    )
}