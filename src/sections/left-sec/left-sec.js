import style from './left-sec.module.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { RiFileList2Line } from "react-icons/ri";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { CgMoreO } from "react-icons/cg";
import CustomButton from '../../atoms/customButton/custom-button';
import profile from '../../images/dummyProfile.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from 'react';
import { isUserLoggedInAtom } from '../../recoil-states';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Dialog from '@mui/material/Dialog';
import Tweet from '../../components/tweet/tweet';



export default function LeftSec () {

    const [isDialogOpen,setIsDialogOpen] = useState('')

    const [isRequestedAccountOption , setIsRequestedAccountOption] = useState(false)
    const nevigate = useNavigate()
    const setUsersLoginStatus = useSetRecoilState(isUserLoggedInAtom)

    const optionsData = [
        {
            icon : <HomeIcon
                className={style.icon}
                
            />,
            option : 'Home'
        },
        {
            icon : <TagIcon
                className={style.icon}
            />,
            option : 'Explore'
        },
        {
            icon : <NotificationsNoneIcon
                className={style.icon}
            />,
            option : 'Notifications'
        },
        {
            icon : <MailOutlineIcon
                className={style.icon}
            />,
            option : 'Messages'
        },
        {
            icon : <BookmarkBorderIcon
                className={style.icon}
            />,
            option : 'Bookmarks'
        },
        {
            icon : <RiFileList2Line
                className={style.icon}
            />,
            option : 'Lists'
        },
        {
            icon : <Person2OutlinedIcon
                className={style.icon}
            />,
            option : 'Profile'
        },
        {
            icon : <CgMoreO
                className={style.icon}
            />,
            option : 'More'
        },
        
    ]
    function handleLogout () {
        setUsersLoginStatus(false)
        setIsRequestedAccountOption(false)
        nevigate("/")
    }
    function GetPopOver () {
        return(
            <div className={style.popover}>
                <p className={style.text}>Add an existing account.</p>
                <p className={style.text} 
                    onClick = {handleLogout}
                >
                    Log Out @jaGdish7898
                </p>
            </div>
        )
    }
    function closeModel ( ) {
        setIsDialogOpen(false)
    }
    return(
        <div className={style.leftSec}>
            <div className={style.iconWraper}>
                <TwitterIcon
                    className={style.twitterIcon}
                />
            </div>
            {
                optionsData.map(({icon,option})=> (
                    <div className={style.optionWraper}>
                        {icon}
                        <p className={style.option}>
                            {option}
                        </p>
                    </div>
                ))
            }
            <CustomButton
                customCss = {style.tweetBtn}
                buttonText = 'Tweet'
                hanldleClickBtn={()=>setIsDialogOpen(true)}
            />
            <div className={style.logOut}
                 onClick = {
                    () => setIsRequestedAccountOption(!isRequestedAccountOption)
                }
            >

                <div className={style.imgWrapper}>
                    <img
                        src={profile}
                        width = '100%'
                        height = '100%'
                    />
                </div>
                <div>
                    <p className={style.name}>Jagdish shinde</p>
                    <p className={style.name}>@jaGdish7898</p>

                </div>
                <MoreHorizIcon 
                    className={style.more}
                   
                />


              
                
            </div>
            {isRequestedAccountOption && <GetPopOver/>}
            <Dialog 
                open = {isDialogOpen}
                PaperProps={{
                    style: {
                        borderRadius : '15px',
                    //   backgroundColor: 'transparent',
                    //   boxShadow: 'none',
                    width : "35%",
                    // height : '70%'
                    },
                  }}
                
            >
                <Tweet 
                    isCloseBtnVisible
                    handleClickCloseBtn = {closeModel}
                />
            </Dialog>

        </div>
    )
}