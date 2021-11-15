import React from "react";
import s from './Sidebar.module.css';
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";

/*import {NavLink} from "react-router-dom";*/

const Sidebar = (props) => {
    let friendsElements = props.sidebar
        .map(friend => <FriendsSidebar avatar={friend.avatar} key={friend.id} name={friend.name} id={friend.id}/>)

    return (
        <div className={s.sidebar}>
            <div className={s.friendsTitle}>Friends</div>
            <div className={s.friends}>{friendsElements}</div>

        </div>
    )
}
export default Sidebar;