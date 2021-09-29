import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogData = [
        {name: "Dmitry", id: "1"},
        {name: "Alex", id: "2"},
        {name: "Vikor", id: "3"},
        {name: "Roman", id: "4"},
        {name: "Valentina", id: "5"}
    ]

    let messageData = [
        {message: "Hi", id: "1"},
        {message: "Yo", id: "2"},
        {message: "By", id: "3"},
        {message: "By", id: "4"},
        {message: "By", id: "5"}
    ]

    let dialogsElements = dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messageData.map(message => <Message message={message.message}/>);

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