import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    let messagesElements = props.state.messageData.map(message => <Message message={message.message} align={message.align}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;