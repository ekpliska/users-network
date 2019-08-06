import React from 'react';
import StyleDialogs from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = ({ users, messages, newDialogMessage, onSendMessage, onChangeMessage }) => {
     
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

    let textMessage = React.createRef();

    let changeMessage = () => { 
        let currentMessage = textMessage.current.value;
        onChangeMessage(currentMessage);
    }

    let sendNewMessage = () => { 
        onSendMessage();
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
                                <textarea ref={textMessage} onChange={changeMessage} value={newDialogMessage}></textarea>
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