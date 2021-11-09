import React from "react";
import Sidebar from "./Sidebar";
import StoreContext from "../../StoreContext1";

/*import {NavLink} from "react-router-dom";*/

const SidebarContainer = () => {

    return <StoreContext.Consumer>
        {(store) => <Sidebar sidebar={store.getState().sidebar}/>
        }
    </StoreContext.Consumer>
}
export default SidebarContainer;