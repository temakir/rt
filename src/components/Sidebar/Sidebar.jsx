import React from "react";
import s from './Sidebar.module.css';

/*import {NavLink} from "react-router-dom";*/

const FriendsSidebar = (props) => {
    return (
        <div>
            <img src={props.avatar}/>
            <div>{props.name}</div>
        </div>)
}

const Sidebar = (props) => {
    let friendsElements = props.state
        .map(friend => <FriendsSidebar avatar={friend.avatar} name={friend.name} id={friend.id}/>)

    return (
        <div className={s.sidebar}>
            <div className={s.friendsTitle}>Friends</div>
            <div className={s.friends}>{friendsElements}</div>

        </div>
    )
}
export default Sidebar;