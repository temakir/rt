import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPageChangeActionCreator} from "../../../redux/profilePage-reducer";

const MyPost = (props) => {
    const postsElements = props.posts
        .map(m => <Post message={m.message} like_counts={m.like_counts}/>)

  //  let addPostElement = React.createRef();

    let addPost = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }

    let onPageChange = (e) => {
        let text = e.target.value;
        //props.updateNewPostText(text)
        props.dispatch(onPageChangeActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPageChange}
                              value={props.newPostText}/>
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
