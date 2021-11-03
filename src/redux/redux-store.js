import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducer);

export default store;