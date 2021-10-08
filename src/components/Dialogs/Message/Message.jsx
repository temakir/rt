import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    let myAva = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png";
    let ava = "https://avatarko.ru/img/kartinka/25/multfilm_sobaka_Griffins_Brian_24619.jpg";

    if (props.align === "myMessage") {
        return <div className={s.message + ' ' + s.right}>
            {props.message}<img className={s.avatar} src={myAva}/>
        </div>
    } else {
        return <div className={s.message + ' ' + s.left}>
            <img className={s.avatar} src={ava}/>{props.message}
        </div>

    }
    /*
    return (
        <div className={s.message + ' ' + (props.align === "myMessage" ? s.right : s.left)}>
            <img className={s.avatar} src={ (props.align === "myMessage" ? myAva : ava
                )}/>
            {props.message}
        </div>
    )
*/
}
export default Message;