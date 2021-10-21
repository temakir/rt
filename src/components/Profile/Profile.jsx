import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.state.posts}
                    addPost={props.addPost}
                    newPostText={props.state.newPostText}
                    updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}
export default Profile;