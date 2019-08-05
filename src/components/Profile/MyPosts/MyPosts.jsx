import React from 'react';
import Post from './Post/Post';
import stylesMyPost from './MyPosts.module.css';
import { addPostCreator, updateNewPosts } from './../../../redux/posts-reducer';

const MyPosts = (props) => {
    
    const { posts, addPost, updatePosts } = props;
    // debugger;

    let postTemplate = posts.posts.map((post, index) => {
        return (
            <Post message={post.text} likeCount={post.likeCount} key={index} />
        );
    });

    let MessageText = React.createRef();

    let welcomeMessage = () => {
        let text = MessageText.current.value;
        // props.dispatch(addPostCreator());
        addPost();
    }

    let changeNewPost = () => {
        let currentText = MessageText.current.value;
        // props.dispatch(updateNewPosts(currentText));
        updatePosts(currentText);
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