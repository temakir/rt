const ADD_POST_DIALOGS = 'ADD-POST-DIALOGS';
const UPDATE_NEW_POST_TEXT_DIALOGS = 'UPDATE-NEW-POST-TEXT-DIALOGS';

let initialiseStore =
        {
            messageData: [
                {message: "Hi. What are you doing?", id: "1", align: "left"},
                {message: "Yo, I'm run. And you?", id: "2", align: "myMessage"},
                {message: "I'm watch TV.", id: "3", align: "left"},
                {message: "Ok", id: "4", align: "myMessage"},
                {message: "By", id: "5", align: "left"}],
            newPostTextDialog: '',
            dialogData: [
                {
                    name: "Dmitry",
                    id: "1",
                    avatar: "https://avatarko.ru/img/kartinka/25/multfilm_sobaka_Griffins_Brian_24619.jpg"
                },
                {name: "Alex", id: "2", avatar: "https://avatarko.ru/img/kartinka/12/multfilm_11778.jpg"},
                {name: "Viktor", id: "3", avatar: "https://avatarko.ru/img/kartinka/25/Elsa_24353.jpg"},
                {name: "Roman", id: "4", avatar: "https://avatarko.ru/img/kartinka/27/multfilm_glaza_26136.jpg"},
                {
                    name: "Valentina",
                    id: "5",
                    avatar: "https://avatarko.ru/img/kartinka/33/poni_yagoda_klubnika_multfilm_33540.jpg"
                }
            ]
        }


const dialogsPageReducer = (state  = initialiseStore, action) => {
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
