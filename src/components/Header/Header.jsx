import React from 'react';
import styleHeader from './Header.module.css';

const Header = () => {
    return (
        <header className={styleHeader.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""></img>
        </header>
    )
}

export default Header;