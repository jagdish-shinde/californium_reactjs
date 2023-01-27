import style from './tweet.module.css'
import profile from '../../images/dummyProfile.jpeg'
import Button from '../../atoms/customButton/custom-button'
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useRef, useState } from 'react';
import { newlyAddedPostAtom } from '../../recoil-states';
import { useSetRecoilState } from 'recoil';
import CloseIcon from '@mui/icons-material/Close';


export default function Tweet ({isCloseBtnVisible = false ,handleClickCloseBtn}) {

    const [image,setImage] = useState('')
    const [inputTweet , setInputTweet] = useState('')
    const inputRef = useRef(null)
    const setNewlyAddedPost = useSetRecoilState(newlyAddedPostAtom)


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

    function handleOnClickIcon (action) {
        if(action === 'pickImage'){
            alert('picking image')
        }
        inputRef.current.click()
    }
    function handleOnSelectImage (e) {
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    function handleSubmitTweet () {
        setNewlyAddedPost({
            name : 'jagdish',
            handlerName : 'jaGdish@7898',
            tweetText : inputTweet,
            tweetCount : 0,
            retweetCount : 0 ,
            likesCount : 0,
            viewsCount : 0,
            tweetReplies : []
        })
        setInputTweet('')
        setImage('')
        inputRef.current = null 
        handleClickCloseBtn()
    }
    return(
        <div>
            {isCloseBtnVisible && <div className={style.crossContainer}>
                <CloseIcon onClick = {handleClickCloseBtn}/>
            </div>}
            <div className={style.tweetHeadingWrapper}>
                <div className={style.imgWrapper}>
                    <img
                        src = {profile}
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
                />
            </div>
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
            <input
                type = 'file'
                hidden
                ref={inputRef}
                onChange = {handleOnSelectImage}
                name = 'tweetPic'
            />
            {/* <img
                src={image}
                height = '100px'
                width = '100px'
                alt = 'foo'
            /> */}
            
        </div>
    )
}