import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <SidebarContainer/>
            <div className="app-wrapper-content">

                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>


                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
                {/* <Profile />*/}
            </div>
        </div>
    )

}


export default App

