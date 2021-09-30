import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
const postsElements = props.posts
    .map(m => <Post message={m.message} like_counts={m.like_counts}/>)



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPost;
