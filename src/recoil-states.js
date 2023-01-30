import { atom } from "recoil";

export const isUserLoggedInAtom  = atom({
    key : 'isUserLoggedIn' ,
    default : false
})

export const newlyAddedPostAtom = atom ({
    key : 'newlyAddedPost',
    default : null
})

export const newUserDataAtom = atom ({
    key : 'newUserData' ,
    default : null 
})