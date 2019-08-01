import React from 'react';
import StyleDialogs from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'; 
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { sendMessage, updateNewMessage } from './../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let userTmplate = props.users.map((user) => {
        return (
            <DialogItem userName={user.userName} userId={user.id} photo={user.photo} />
        );
    });

    let messageTemplate = props.messages.messages.map((message) => {
        return (
            <MessageItem userMessage={message.text} messageStatus={message.status} />
        );
    });

    let textMessage = React.createRef();

    let changeMessage = () => { 
        let currentMessage = textMessage.current.value;
        props.dispatch(updateNewMessage(currentMessage));
    }

    let sendNewMessage = () => { 
        let message = textMessage.current.value;
        props.dispatch(sendMessage());
    }

    return (
        <div className={StyleDialogs.dialogsChat}>
            <div className={StyleDialogs.dialogs}>
                <div className={StyleDialogs.dialogItem}>
                    {userTmplate}
                </div>
                <div className={StyleDialogs.messages}>
                    <div className={StyleDialogs.messageItem}>
                        {messageTemplate}
                        <div>
                            <div>
                                <textarea ref={textMessage} onChange={changeMessage} value={props.newDialogMessage}></textarea>
                            </div>
                            <div>
                                <button onClick={sendNewMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;