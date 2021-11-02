import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this.getState());
    }
}

window.store = store;

export default store;