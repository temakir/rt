import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://image.shutterstock.com/image-vector/tree-vector-icon-nature-trees-600w-1691582557.jpg' alt='avatar'/>
            <div className={s.blockLogin}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    )
}
export default Header