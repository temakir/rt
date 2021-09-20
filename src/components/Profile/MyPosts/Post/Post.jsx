import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (

        <div className={s.item}>
            <img src="https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png"/>
            Post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;