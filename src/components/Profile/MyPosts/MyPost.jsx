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
                <Post message="Hello!" like_counts="15"/>
                <Post message="Hello! What's your name?" like_counts="4"/>
                <Post message="My name is Igor. And you?" like_counts="7"/>
            </div>
        </div>

    )
}
export default MyPost;
