import reportWebVitals from './reportWebVitals';
import {rendererEntireTree} from "./render";
import state, {addPost, addPostDialogs, updateNewPostText, updateNewPostTextDialogs} from "./redux/state";


rendererEntireTree(state, addPost, updateNewPostText, addPostDialogs, updateNewPostTextDialogs);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

