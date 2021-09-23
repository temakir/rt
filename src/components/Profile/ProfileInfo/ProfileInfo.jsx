import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/free-photo/beach-sea-sand-and-palm-in-summer-day_63047-1260.jpg?size=626&ext=jpg"/>
            </div>
            <div className={s.descriptionBlock}>Avatar+description</div>
        </div>

    )
}
export default ProfileInfo;