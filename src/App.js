import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
debugger;
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Sidebar state={props.state.sidebar}/>
            <div className="app-wrapper-content">

                <Route path="/profile"
                       render={() => <Profile store={props.store}/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>

                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
                {/* <Profile />*/}
            </div>
        </div>
    )

}


export default App

