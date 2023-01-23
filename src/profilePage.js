import { useRecoilValue } from "recoil"
import { profileDataAtom } from "./recoil-states"

export default function ProfilePage () {
    const profile = useRecoilValue(profileDataAtom)
    console.log({profile})
    return(
        <h1>Welcome to the profile page</h1>
    )
}