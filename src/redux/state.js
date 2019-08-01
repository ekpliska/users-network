import postsReducer from './posts-reducer';
import dialogReducer from './dialogs-reducer';

let store = {
    getState() {
        return this._state;
    },
    _state: {
        userData: {
            users: [
                { id: 0, userName: "Mother", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
                { id: 1, userName: "Father", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
                { id: 2, userName: "Marina", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
                { id: 3, userName: "Grey", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
            ],
        },
        profilePage: {
            posts: [
                { id: 1, text: "Привет", likeCount: "15" },
                { id: 2, text: "Как дела?", likeCount: "20" },
            ],
            newPostText: "type your message",
        },
        dialogsPage: {
            messages: [
                { id: 0, text: "Привет", status: "my_message" },
                { id: 1, text: "Привет :)", status: "user_message" },
                { id: 2, text: "Как дела?", status: "my_message" },
                { id: 3, text: "Хорошо", status: "user_message" }
            ],
            newDialogMessage: ""
        },
        friendsWidget: [
            { id: 0, userName: "Mother", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
            { id: 1, userName: "Father", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
            { id: 2, userName: "Marina", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
            { id: 3, userName: "Grey", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
        ],
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('here');
    },

    dispatch(action) {

        this._state.profilePage = postsReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;