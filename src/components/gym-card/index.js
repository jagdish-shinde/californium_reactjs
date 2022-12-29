import React from "react";
import style from './card.module.css'
import { FaHandPointRight } from 'react-icons/fa';

export function Gymcard({fees,benefitList,heading,planName,buttonText}){
    
    return(
        <div className={style.card}>
            <h3 className={style.cardHeading}>{heading}</h3>
            <div className={style.contentHeading}> 
                <strong>{fees}</strong>
                <strong className={style.planName}>{planName}</strong>
            </div>
            <div className={style.benefitList}>
                <ul>
                {benefitList.map(item=>
                    <div className={style.listItem}>
                        <FaHandPointRight style={{marginRight:"6px"}}/>
                        <li>{item}</li>
                    </div>
                )} 
                </ul>
            </div>
            <div className={style.trialButton}>{buttonText}</div>
        </div>
    )
}