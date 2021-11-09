import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPageChangeActionCreator} from "../../../redux/profilePage-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPageChange = (text) => {
        props.store.dispatch(onPageChangeActionCreator(text))
    }

    return <MyPost addPost={addPost} updateNewPostText={onPageChange}
                   posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
}
export default MyPostContainer;
