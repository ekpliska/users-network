const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialStat = {
    messages: [
        { id: 0, text: "Привет", status: "my_message" },
        { id: 1, text: "Привет :)", status: "user_message" },
        { id: 2, text: "Как дела?", status: "my_message" },
        { id: 3, text: "Хорошо", status: "user_message" }
    ],
    newDialogMessage: "You message..."
};

const dialogReducer = (state = initialStat, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                text: state.newDialogMessage,
                status: 'new_message'
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newDialogMessage: ''
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newDialogMessage: action.newMessage
            };
        default:
            return state;
    }
}

export const updateNewMessage = (currentText) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: currentText
    }
}
export const sendMessage = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogReducer;