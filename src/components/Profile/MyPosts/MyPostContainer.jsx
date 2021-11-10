import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPageChangeActionCreator} from "../../../redux/profilePage-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(onPageChangeActionCreator(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;
