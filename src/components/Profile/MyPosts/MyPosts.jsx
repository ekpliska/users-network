import React from 'react';
import Post from './Post/Post';
import stylesMyPost from './MyPosts.module.css';

const MyPosts = ({ posts, addPost, newPostText, updatePosts = f => f }) => {
    
    let postTemplate = posts.posts.map((post, index) => {
        return (
            <Post message={post.text} likeCount={post.likeCount} key={index} />
        );
    });

    let MessageText = React.createRef();

    let welcomeMessage = () => {
        let currentText = MessageText.current.value;
        addPost(currentText);
    }

    let changeNewPost = () => {
        let currentText = MessageText.current.value;
        updatePosts(currentText);
    }

    return (
        <div className={stylesMyPost.postsContent}>
            <div>
                <div>
                    <textarea ref={MessageText} onChange={changeNewPost} value={newPostText}></textarea>
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