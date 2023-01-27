import style from './posts.module.css'
import Tweet from '../../components/tweet/tweet'
import PostCard from '../../components/post-card/post-card'
import { postData } from '../../const'

export default function Posts () {
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
                {postData.map((postDetails) => (
                    <PostCard 
                        postDetails = {postDetails}
                    />
                ))}
            </div>

        </section>
    )
}