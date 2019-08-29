import React from 'react';
import StyleDialogs from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import DialogForm from './DialogForm';

const Dialogs = ({ users, messages, onSendMessage }) => {
     
    let userTmplate = users.map((user, index) => {
        return (
            <DialogItem key={index} userName={user.userName} userId={user.id} photo={user.photo} />
        );
    });

    let messageTemplate = messages.map((message, index) => {
        return (
            <MessageItem key={index} userMessage={message.text} messageStatus={message.status} />
        );
    });

    const sendNewMessage = ({ messageValue }) => { 
        onSendMessage(messageValue);
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
                            <DialogForm onSubmit={sendNewMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;