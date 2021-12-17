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
                    src="https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt="Avatar"/>
                Avatar+description
            </div>
        </div>

    )
}
export default ProfileInfo;