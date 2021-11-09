import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    let messagesElements = props.messageData.map(message => <Message message={message.message}
                                                                     align={message.align}/>);

    //   let addPostElement = React.createRef();

    let onAddPost = () => {
        props.addPostDialogs()
        //props.dispatch(addPostDialogsActionCreator())
    }

    let onDialogChange = (e) => {
        let text = e.target.value;
        props.updateNewPostTextDialogs(text)
        //  props.dispatch(updateNewPostTextDialogsActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onDialogChange}
                          value={props.newPostTextDialog}
                          placeholder='Enter your message'/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;