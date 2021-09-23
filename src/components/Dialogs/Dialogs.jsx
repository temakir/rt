import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Dmitry" id="1"/>
                <DialogItem name="Alex" id="2"/>
                <DialogItem name="Vikor" id="3"/>
                <DialogItem name="Roman" id="4"/>
                <DialogItem name="Valentina" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Yo"/>
                <Message message="By"/>
                <Message message="By"/>
                <Message message="By"/>
            </div>
        </div>
    )
}

export default Dialogs;