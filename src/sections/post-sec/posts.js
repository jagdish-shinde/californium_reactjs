import style from './posts.module.css'
import Tweet from '../../components/tweet/tweet'
import PostCard from '../../components/post-card/post-card'
import { postData } from '../../const'
import { newlyAddedPostAtom ,newUserDataAtom} from '../../recoil-states'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { getUniqueCode } from '../../helper'

export default function Posts () {
    const [postDetails , setPostDetails] = useState(postData)
    const [newPostData,setNewPost] = useRecoilState(newlyAddedPostAtom)
    const newUser = useRecoilValue(newUserDataAtom)

    useEffect( () => {
        if(!newPostData) return
        const updatedPostsData = JSON.parse(JSON.stringify(postDetails))

        updatedPostsData.forEach(post => {
            if(post.id === newUser.id){
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
        setPostDetails(updatedPostsData)
    },[newPostData])

    useEffect (() => {
        if(!newUser) return
        const postDetailsCopy = JSON.parse(JSON.stringify(postDetails))
        const existinguserIndex = postDetailsCopy.findIndex(post => post.id == newUser.id)
        if(existinguserIndex != -1){
            postDetailsCopy.splice(existinguserIndex,1)
        }
        setPostDetails([
            newUser,
            ...postDetailsCopy
        ])
    },[newUser])


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
                {postDetails.map((postDetails) => (
                    <PostCard 
                        postDetails = {postDetails}
                    />
                ))}
            </div>

        </section>
    )
}