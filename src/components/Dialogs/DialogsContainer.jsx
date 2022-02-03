import React from 'react';
import {addPostDialogsActionCreator, updateNewPostTextDialogsActionCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messageData: state.dialogsPage.messageData,
        newPostTextDialog: state.dialogsPage.newPostTextDialog,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostDialogs: () => {
            dispatch(addPostDialogsActionCreator())
        },
        updateNewPostTextDialogs: (text) => {
            dispatch(updateNewPostTextDialogsActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;