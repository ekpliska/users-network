import React from 'react';
import StyleDialogs from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div>
            <div className={StyleDialogs.message}>{props.userMessage}</div>
        </div>
    );
}

export default MessageItem;