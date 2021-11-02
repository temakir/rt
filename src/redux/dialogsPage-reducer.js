const ADD_POST_DIALOGS = 'ADD-POST-DIALOGS';
const UPDATE_NEW_POST_TEXT_DIALOGS = 'UPDATE-NEW-POST-TEXT-DIALOGS';

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST_DIALOGS:
            let newPost = {
                message: state.newPostTextDialog,
                id: 5,
                align: "myMessage"
            };
            state.messageData.push(newPost)
            state.newPostTextDialog = '';
            return state;

        case UPDATE_NEW_POST_TEXT_DIALOGS:
            state.newPostTextDialog = action.newTextDialog;
            return state;

        default:
            return state

    }


}

export const addPostDialogsActionCreator = () => ({type: ADD_POST_DIALOGS});
export const updateNewPostTextDialogsActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT_DIALOGS,
    newTextDialog: text
});


export default dialogsPageReducer;
