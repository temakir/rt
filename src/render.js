import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export let rendererEntireTree = (state, addPost, updateNewPostText, addPostDialogs, updateNewPostTextDialogs) => {
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
