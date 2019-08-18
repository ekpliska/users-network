import React from 'react';
import styleHeader from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ isAuth, login }) => {
    return (
        <header className={styleHeader.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""></img>
            <div className={styleHeader.Login}>
                {
                    (isAuth === true)
                        ? <p>{login}</p>
                        : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;