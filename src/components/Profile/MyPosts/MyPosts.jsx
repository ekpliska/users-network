import React from 'react';
import Post from './Post/Post';
import stylesMyPost from './MyPosts.module.css';
import { addPostCreator, updateNewPosts } from './../../../redux/posts-reducer';

const MyPosts = (props) => {


    let postTemplate = props.posts.map((post) => {
        return (
            <Post message={post.text} likeCount={post.likeCount} />
        );
    });

    let MessageText = React.createRef();

    let welcomeMessage = () => {
        let text = MessageText.current.value;
        // props.dispatch(addPostCreator());
        props.addPostCreator();
    }

    let changeNewPost = () => {
        let currentText = MessageText.current.value;
        // props.dispatch(updateNewPosts(currentText));
        props.updateNewPosts(currentText);
    }

    return (
        <div className={stylesMyPost.postsContent}>
            <div>
                <div>
                    <textarea ref={MessageText} onChange={changeNewPost} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={welcomeMessage}>Add Post</button>
                </div>
            </div>
            <hr></hr>
            {postTemplate}
        </div>
    )
}

export default MyPosts;