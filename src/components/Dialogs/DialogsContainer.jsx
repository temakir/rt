import React from 'react';
import {addPostDialogsActionCreator, updateNewPostTextDialogsActionCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messageData: state.dialogsPage.messageData,
        newPostTextDialog: state.dialogsPage.newPostTextDialog
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

let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)

export default DialogsContainer;