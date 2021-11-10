import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)
export default SidebarContainer;