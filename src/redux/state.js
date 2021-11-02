const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const  ADD_POST_DIALOGS = 'ADD-POST-DIALOGS';
const UPDATE_NEW_POST_TEXT_DIALOGS = 'UPDATE-NEW-POST-TEXT-DIALOGS';


let store = {
    _callSubscriber() {
        console.log('State was changed')
    },
    _state: {
        profilePage: {
            posts: [
                {message: "Hello!", id: "1", like_counts: "15"},
                {message: "Hello! What's your name?", id: "2", like_counts: "4"},
                {message: "My name is Igor. And you?", id: "3", like_counts: "11"}],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: [
            {
                name: "Dmitry",
                id: "1",
                avatar: "https://avatarko.ru/img/kartinka/25/multfilm_sobaka_Griffins_Brian_24619.jpg"
            },
            {name: "Alex", id: "2", avatar: "https://avatarko.ru/img/kartinka/12/multfilm_11778.jpg"},
            {name: "Viktor", id: "3", avatar: "https://avatarko.ru/img/kartinka/25/Elsa_24353.jpg"}

        ]
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: 5,
                like_counts: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        } else if (action.type === 'ADD-POST-DIALOGS') {
            let newPost = {
                message: this._state.dialogsPage.newPostTextDialog,
                id: 5,
                align: "myMessage"
            };
            this._state.dialogsPage.messageData.push(newPost)
            this._state.dialogsPage.newPostTextDialog = '';
            this._callSubscriber(this.getState());
        }else if (action.type === 'UPDATE-NEW-POST-TEXT-DIALOGS') {
            this._state.dialogsPage.newPostTextDialog = action.newTextDialog;
            this._callSubscriber(this.getState());
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPageChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addPostDialogsActionCreator = () => ({type: ADD_POST_DIALOGS});
export const updateNewPostTextDialogsActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT_DIALOGS,newTextDialog: text});

window.store = store;

export default store;