import { atom } from "recoil";

export const isUserLoggedInAtom  = atom({
    key : 'isUserLoggedIn' ,
    default : false
})

export const newlyAddedPostAtom = atom ({
    key : 'newlyAddedPost',
    default : null
})

export const loggedInUserAtom = atom ({
    key : 'loggedInUser' ,
    default : null 
})