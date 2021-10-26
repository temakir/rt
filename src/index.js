import reportWebVitals from './reportWebVitals';
import state, {addPost, addPostDialogs, subscribe, updateNewPostText, updateNewPostTextDialogs} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rendererEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>

            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addPostDialogs={addPostDialogs}
                 updateNewPostTextDialogs={updateNewPostTextDialogs}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rendererEntireTree(state);

subscribe(rendererEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

