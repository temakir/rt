import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>

    )
}
export default Profile;