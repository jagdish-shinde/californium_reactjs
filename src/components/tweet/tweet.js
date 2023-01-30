import style from './tweet.module.css'
import profile from '../../images/dummyProfile.jpeg'
import Button from '../../atoms/customButton/custom-button'
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useRef, useState } from 'react';
import { newlyAddedPostAtom ,loggedInUserAtom} from '../../recoil-states';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import CloseIcon from '@mui/icons-material/Close';
import { getUniqueCode } from '../../helper';
// import { loggedInUserAtom } from '../../recoil-states';


export default function Tweet ({isCloseBtnVisible = false , handleClickCloseBtn}) {

    const [image,setImage] = useState('')
    const [inputTweet , setInputTweet] = useState('')

    const inputRef = useRef(null)
    const setNewlyAddedPost = useSetRecoilState(newlyAddedPostAtom)
    const loggedInUser = useRecoilValue(loggedInUserAtom)


        // to make twwet footer 
    const iconList = [
        {
            icon : <CollectionsIcon
            className={style.icon}
            />,
            action : 'pickImage'

        },
        {
            icon : <GifBoxOutlinedIcon
            className={style.icon}
            />,

        },
        {
            icon : <ListOutlinedIcon
            className={style.icon}
            />,
        },
        {
            icon : <EmojiEmotionsOutlinedIcon
            className={style.icon}
            />,
        },
        {
            icon :  <LocationOnOutlinedIcon
            className={style.icon}
            />
        }  
    ]

    // function to triiger picking image imput
    function handleOnClickIcon (action) {
        if(action === 'pickImage'){       
            inputRef.current.click()
        }
    }

    // Function to pick image 
    function handleOnSelectImage (e) {
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
            inputRef.current = null 
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    // function to submit the twwet
    function handleSubmitTweet () {
        setNewlyAddedPost({
            tweetText : inputTweet,
            tweetPic : image,
            tweetCount : 0,
            retweetCount : 0 ,
            likesCount : 0,
            viewsCount : 0,
            tweetReplies : []
        })
        setInputTweet('')
        setImage('')
        handleClickCloseBtn()
    }
    return(
        <div >
            {
                isCloseBtnVisible && 
                <div className={style.crossContainer}>
                    <CloseIcon onClick = {handleClickCloseBtn}/>
                </div>
            }
            {/* input space ... */}
            <div className={style.tweetHeadingWrapper}>

                <div className={style.imgWrapper}>
                    <img
                        src = {loggedInUser?.profilePic || profile}
                        height = '100%'
                        width = '100%'
                    />
                </div>
                <textarea 
                    className={style.textArea}
                    placeholder = {`What's Happening ?`}
                    rows={5}
                    onChange = {
                        (e) => setInputTweet(e.target.value)
                    }
                    value = {inputTweet}
                />

            </div>
            {/* Image container */}
           { 
            image &&  
            <div className={style.imageWrapper}>
                <img
                    src={image}
                    height = '100%'
                    width = '100%'
                    alt = 'foo'
                />
                </div>
            }
           {/* tweet btn and icon container */}

            <div className={style.tweetFooterWrapper}>

                <div className={style.icons}>
                    {iconList.map(({icon,action},index) => (
                        <div 
                            onClick={
                                () => handleOnClickIcon(action)
                            }
                        >{icon}</div>
                    ))}
                </div>
                <div className={style.btnWrapper}>
                    <Button 
                        customCss={style.tweetBtn}
                        buttonText = 'Tweet'
                        hanldleClickBtn = {handleSubmitTweet}
                    />
                </div>   

            </div>

            {/* hidden input */}
            <input
                type = 'file'
                hidden
                ref={inputRef}
                onChange = {handleOnSelectImage}
                name = 'tweetPic'
            />

        </div>
    )
}