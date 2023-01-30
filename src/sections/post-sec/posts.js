import style from './posts.module.css'
import Tweet from '../../components/tweet/tweet'
import PostCard from '../../components/post-card/post-card'
import { userProfiles } from '../../const'
import { newlyAddedPostAtom ,loggedInUserAtom} from '../../recoil-states'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { getUniqueCode } from '../../helper'

export default function Posts () {
    const [userProfileInfo , setUserProfileInfo] = useState(userProfiles)
    const [newPostData,setNewPost] = useRecoilState(newlyAddedPostAtom)
    const loggedInUse = useRecoilValue(loggedInUserAtom)

    useEffect( () => {
        if(!newPostData) return
        const updatedPostsData = JSON.parse(JSON.stringify(userProfileInfo))

        updatedPostsData.forEach(post => {
            if(post.id === loggedInUse.id){
                if(post.tweets){
                    post.tweets.unshift(
                        newPostData
                    )
                    return
                }
                post.tweets = [
                    newPostData
                ]
            }
        })
        setNewPost(null)
        setUserProfileInfo(updatedPostsData)
    },[newPostData])

    useEffect (() => {
        if(!loggedInUse) return

        const postDetailsCopy = JSON.parse(JSON.stringify(userProfileInfo))
        const existinguserIndex = postDetailsCopy.findIndex(post => post.id == loggedInUse.id)
        if(existinguserIndex != -1){
            postDetailsCopy.splice(existinguserIndex,1)
        }
        setUserProfileInfo([
            loggedInUse,
            ...postDetailsCopy
        ])
    },[loggedInUse])
    return(
        <section className={style.postWrapper}>
            <header className={style.header}>
                <p className={style.heading}>Home</p>
                <div className={style.headerOptionWrapper}>
                    <span>For You</span>
                    <span>Following</span>
                </div>
            </header>

            <div className={style.postsWrapper}>
                <Tweet/>
                {userProfileInfo.map((userProfileInfo) => (
                    <PostCard 
                        userProfileInfo = {userProfileInfo}
                    />
                ))}
            </div>

        </section>
    )
}