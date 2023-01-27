import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { isUserLoggedInAtom } from "../../recoil-states"
import { useNavigate } from "react-router-dom"
import {
    Posts,
    LeftSec,
    RightSec
} from '../../sections/export'
import style from './home.module.css'

export default function HomePage () {

    const isUserLoggedIn = useRecoilValue(isUserLoggedInAtom)
    const nevigate = useNavigate()

    useEffect (() => {
        if(!isUserLoggedIn) {
            nevigate('/signin')
        }
    },[isUserLoggedIn])
    return(
        <main className={style.homePage}>
            <LeftSec/>
            <Posts/>
            <RightSec/>
        </main>
    )
}