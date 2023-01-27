import { atom } from "recoil";

export const isUserLoggedInAtom  = atom({
    key : 'isUserLoggedIn' ,
    default : true
})

export const newlyAddedPostAtom = atom ({
    key : 'newlyAddedPost',
    default : null
})