import React from 'react';
import { addPostCreator, updateNewPosts } from '../../../redux/posts-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    // debugger;
    let state = props.getState();

    let welcomeMessage = () => {
        props.store.dispatch(addPostCreator());
    }

    let changeNewPost = (currentText) => {
        props.store.dispatch(updateNewPosts(currentText));
    }

    return (
        <MyPosts
            updateNewPosts={changeNewPost}
            addPostCreator={welcomeMessage}
            posts={state.profilePage.posts}
        ></MyPosts>
    )
}

export default MyPostsContainer;