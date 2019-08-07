import React from 'react';
import StylesNavbar from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import { connect } from 'react-redux';

const Navbar = (props) => {
    return (
        <div>
            <nav className={StylesNavbar.nav}>
                <div className={StylesNavbar.item}>
                    <NavLink to="/profile" activeClassName={StylesNavbar.active}>Profile</NavLink>
                </div>
                <div className={StylesNavbar.item}>
                    <NavLink to="/message" activeClassName={StylesNavbar.active}>Messages</NavLink>
                </div>
                <div className={StylesNavbar.item}>
                    <NavLink to="/news" activeClassName={StylesNavbar.active}>News</NavLink>
                </div>
                <div className={StylesNavbar.item}>
                    <NavLink to="/music" activeClassName={StylesNavbar.active}>Music</NavLink>
                </div>
                <div className={StylesNavbar.item}>
                    <NavLink to="/users" activeClassName={StylesNavbar.active}>Users</NavLink>
                </div>
                <div className={StylesNavbar.item}>
                    <NavLink to="/settings" activeClassName={StylesNavbar.active}>Settings</NavLink>
                </div>
            </nav>
            <Friends friendList={props}></Friends>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        friendList: state.friendsWidget.friendsWidget,
    }
}

export default connect(mapStateToProps)(Navbar);