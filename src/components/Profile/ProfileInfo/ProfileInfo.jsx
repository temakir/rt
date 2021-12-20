import React from "react";
import s from './ProfileInfo.module.css';
import Preload from "../../common/Preload/Preload";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preload/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg" alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt="Avatar"/>
                <div>Обо мне: {props.profile.aboutMe}</div>
                <div>Полное имя: {props.profile.fullName}</div>
                <div>Контакты:</div>
                <div>{Object.entries(props.profile.contacts).map(([m, v]) => <div>{m}: <a href=''> {v} </a></div>)}
                </div>
                <div>Ищу работу:
                    {props.profile.lookingForAJob ? "YES" : "NO"}, {props.profile.lookingForAJobDescription}</div>
                Avatar+description
            </div>
        </div>

    )
}
export default ProfileInfo;