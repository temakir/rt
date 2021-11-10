import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <SidebarContainer/>
            <div className="app-wrapper-content">

                <Route path="/profile"
                       render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
                {/* <Profile />*/}
            </div>
        </div>
    )

}


export default App

