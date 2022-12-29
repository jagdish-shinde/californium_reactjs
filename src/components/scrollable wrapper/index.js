import React from "react";
import { Gymcard } from "../gym-card";
import style from './scrollable.module.css'


export function Scroller(){
    let benefitList=['Open Gym','Gymnastic','Swimming','Kickboxing']
    return(
        <div className={style.scrollableWrapper}>
            <Gymcard benefitList={benefitList} fees='$200/month' heading='Buy Now' planName='Jumbo Plan' buttonText='Start Free Trial' ></Gymcard>
            <Gymcard benefitList={benefitList} fees='$500/month' heading='Buy Now' planName='Silver Plan' buttonText='Start Free Trial' ></Gymcard>
            <Gymcard benefitList={benefitList} fees='$700/month' heading='Buy Now' planName='Gold Plan' buttonText='Start Free Trial' ></Gymcard>
            <Gymcard benefitList={benefitList} fees='$1200/month' heading='Buy Now' planName='Platinum Plan' buttonText='Start Free Trial' ></Gymcard>
            <Gymcard benefitList={benefitList} fees='$200/month' heading='Buy Now' planName='Jumbo Plan' buttonText='Start Free Trial' ></Gymcard>
            <Gymcard benefitList={benefitList} fees='$200/month' heading='Buy Now' planName='Jumbo Plan' buttonText='Start Free Trial' ></Gymcard>
            


        </div>
    )
}