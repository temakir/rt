import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>

    )
}
export default MyPost;