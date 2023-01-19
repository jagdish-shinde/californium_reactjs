import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { isUserLoggedInAtom } from "../recoil-states"
import { useNavigate } from "react-router-dom"

export default function HomePage () {

    const isUserLoggedIn = useRecoilValue(isUserLoggedInAtom)
    const nevigate = useNavigate()

    useEffect (() => {
        if(!isUserLoggedIn) {
            nevigate('/signin')
        }

    },[])
    return(
        <h1>Welcome to the home page !!</h1>
    )
}