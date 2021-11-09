import React from "react";

/*import {NavLink} from "react-router-dom";*/

const FriendsSidebar = (props) => {
    return (
        <div>
            <img src={props.avatar}/>
            <div>{props.name}</div>
        </div>)
}

export default FriendsSidebar;