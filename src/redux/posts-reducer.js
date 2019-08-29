const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        { id: 1, text: "Привет", likeCount: "15" },
        { id: 2, text: "Как дела?", likeCount: "20" },
    ],
};

const postsReducer = (state = initialState, action) => {

    switch (action.type) { 
        case ADD_POST:
            let newPost = {
                id: 3,
                text: action.textPost,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        default:
            return state;
    }
}

export const addPostCreator = (textPost) => {
    return {
        type: ADD_POST,
        textPost: textPost
    }
};

export default postsReducer;