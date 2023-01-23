import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';



export const profileDataAtom = atom ({
    key : 'profileData' ,
    defult : {

    }
})