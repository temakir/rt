import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addPostDialogsActionCreator, updateNewPostTextDialogsActionCreator} from "../../redux/state";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)

    let messagesElements = props.state.messageData.map(message => <Message message={message.message}
                                                                           align={message.align}/>);

    //   let addPostElement = React.createRef();

    let addPost = () => {
        // props.addPostDialogs()
        props.dispatch(addPostDialogsActionCreator())
    }

    let onDialogChange = (e) => {
        let text = e.target.value;
        // props.updateNewPostTextDialogs(text)
        props.dispatch(updateNewPostTextDialogsActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onDialogChange}
                          value={props.state.newPostTextDialog}
                          placeholder='Enter your message'/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;