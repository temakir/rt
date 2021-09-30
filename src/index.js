import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
    {name: "Dmitry", id: "1"},
    {name: "Alex", id: "2"},
    {name: "Vikor", id: "3"},
    {name: "Roman", id: "4"},
    {name: "Valentina", id: "5"}
]

let messageData = [
    {message: "Hi", id: "1"},
    {message: "Yo", id: "2"},
    {message: "By", id: "3"},
    {message: "By", id: "4"},
    {message: "By", id: "5"}
]

let posts = [
    {message: "Hello!", id: "1", like_counts: "15"},
    {message: "Hello! What's your name?", id: "2", like_counts: "4"},
    {message: "My name is Igor. And you?", id: "3", like_counts: "11"}
]


ReactDOM.render(
    <React.StrictMode>
        <App dialogData={dialogData} messageData={messageData} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
