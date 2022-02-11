import React from 'react';
import {addPostDialogsActionCreator, updateNewPostTextDialogsActionCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);