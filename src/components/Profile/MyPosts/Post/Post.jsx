import React from "react";
import s from './Post.module.css';

const Post = (props) => {
 //   debugger;
    return (

        <div className={s.item}>
            <img src="https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png"/>
            {props.message}
            <div>
                <span>like {props.like_counts}</span>
            </div>
        </div>
    )
}
export default Post;