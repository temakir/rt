import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
const postsElements = props.posts
    .map(m => <Post message={m.message} like_counts={m.like_counts}/>)

let addPostElement = React.createRef();

let addPost = () => {
    let text = addPostElement.current.value;
    props.addPost(text)
    addPostElement.current.value = '';
}

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={addPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPost;
