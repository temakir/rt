import React from 'react';
import {addPostDialogsActionCreator, updateNewPostTextDialogsActionCreator} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext1";

const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();

            let addPost = () => {
                store.dispatch(addPostDialogsActionCreator())
            }

            let onDialogChange = (text) => {
                store.dispatch(updateNewPostTextDialogsActionCreator(text))
            }

            return <Dialogs addPostDialogs={addPost}
                     updateNewPostTextDialogs={onDialogChange}
                     dialogData={state.dialogsPage.dialogData}
                     messageData={state.dialogsPage.messageData}
                     newPostTextDialog={state.dialogsPage.newPostTextDialog}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;