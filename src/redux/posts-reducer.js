const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        { id: 1, text: "Привет", likeCount: "15" },
        { id: 2, text: "Как дела?", likeCount: "20" },
    ],
    newPostText: "type your message"
};

const postsReducer = (state = initialState, action) => {

    switch (action.type) { 
        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPosts = (currentText) => {
    return {
        type: UPDATE_NEW_POST,
        newText: currentText
    }
};

export default postsReducer;