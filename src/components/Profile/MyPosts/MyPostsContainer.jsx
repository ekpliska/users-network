import React from 'react';
import { addPostCreator, updateNewPosts } from '../../../redux/posts-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    // debugger;
    
    let state = props.store;
    let welcomeMessage = () => {
        state.dispatch(addPostCreator());
    }

    let changeNewPost = (currentText) => {
        state.dispatch(updateNewPosts(currentText));
    }

    return (
        <MyPosts
            updateNewPosts={changeNewPost}
            addPostCreator={welcomeMessage}
            posts={state.state.profilePage.posts}
        ></MyPosts>
    )
}

export default MyPostsContainer;