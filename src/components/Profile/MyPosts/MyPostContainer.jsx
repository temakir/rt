import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPageChangeActionCreator} from "../../../redux/profilePage-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext1";

const MyPostContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator())
            }

            let onPageChange = (text) => {
                store.dispatch(onPageChangeActionCreator(text))
            }
            return <MyPost addPost={addPost} updateNewPostText={onPageChange}
                           posts={state.profilePage.posts}
                           newPostText={state.profilePage.newPostText}/>
        }
        }

    </StoreContext.Consumer>
}
export default MyPostContainer;
