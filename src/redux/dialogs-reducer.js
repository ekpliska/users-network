const SEND_MESSAGE = 'SEND_MESSAGE';

let initialStat = {
    messages: [
        { id: 0, text: "Привет", status: "my_message" },
        { id: 1, text: "Привет :)", status: "user_message" },
        { id: 2, text: "Как дела?", status: "my_message" },
        { id: 3, text: "Хорошо", status: "user_message" }
    ],
};

const dialogReducer = (state = initialStat, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                text: action.messageValue,
                status: 'new_message'
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
}

export const sendMessage = (messageValue) => ({
    type: SEND_MESSAGE,
    messageValue: messageValue
});

export default dialogReducer;