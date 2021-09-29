import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    let posts = [
        {message: "Hello!", id: "1",like_counts : "15" },
        {message: "Hello! What's your name?", id: "2",like_counts : "4" },
        {message: "My name is Igor. And you?", id: "3",like_counts : "11" }
    ]

const postsElements = posts
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
