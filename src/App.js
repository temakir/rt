import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Sidebar state={props.state.sidebar}/>
            <div className="app-wrapper-content">

                <Route path="/profile"
                       render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                              dispatch={props.dispatch}/>}/>

                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
                {/* <Profile />*/}
            </div>
        </div>
    )

}


export default App

