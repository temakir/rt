import React from "react";
import Sidebar from "./Sidebar";

/*import {NavLink} from "react-router-dom";*/

const SidebarContainer = (props) => {

    return <Sidebar sidebar={props.store.getState().sidebar}/>
}
export default SidebarContainer;