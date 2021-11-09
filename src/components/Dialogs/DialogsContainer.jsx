import React from 'react';
import {addPostDialogsActionCreator, updateNewPostTextDialogsActionCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostDialogsActionCreator())
    }

    let onDialogChange = (text) => {
        props.store.dispatch(updateNewPostTextDialogsActionCreator(text))
    }

    return <Dialogs addPostDialogs={addPost}
                    updateNewPostTextDialogs={onDialogChange}
                    dialogData={state.dialogsPage.dialogData}
                    messageData={state.dialogsPage.messageData}
                    newPostTextDialog={state.dialogsPage.newPostTextDialog}/>
}

export default DialogsContainer;