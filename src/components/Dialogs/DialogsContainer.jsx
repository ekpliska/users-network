// Контейнерная компонента

import React from 'react';
import { sendMessage, updateNewMessage } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let changeMessage = (currentMessage) => { 
        props.dispatch(updateNewMessage(currentMessage));
    }

    let sendNewMessage = () => { 
        props.dispatch(sendMessage());
    }

    return (
        <Dialogs
            users={props.users}
            messages={props.messages.messages}
            onChangeMessage={changeMessage}
            onSendMessage={sendNewMessage}
        />
    );
}

export default DialogsContainer;