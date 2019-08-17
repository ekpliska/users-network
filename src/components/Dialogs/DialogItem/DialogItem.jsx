import React from 'react';
import StyleDialogs from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = `/message/${props.userId}`;
    let userName = props.userName;
    let photoUser = `${props.photo}`;

    return (
        <div className={`${StyleDialogs.dialog} ${StyleDialogs.activeDialog}`}>
            <img src={photoUser} className={StyleDialogs.avatar} alt=""></img>
			<NavLink to={path}>{userName}</NavLink>
		</div>
	);
}

export default DialogItem;