import React from 'react';
import Post from './Post/Post';
import stylesMyPost from './MyPosts.module.css';
import PostForm from './PostForm';

const MyPosts = ({ posts, addPost }) => {
    
    let postTemplate = posts.posts.map((post, index) => {
        return (
            <Post message={post.text} likeCount={post.likeCount} key={index} />
        );
    });

    const sendPost = ({ postMessage }) => {
        addPost(postMessage);
    }

    return (
        <div className={stylesMyPost.postsContent}>
            <PostForm onSubmit={sendPost} />
            <hr></hr>
            {postTemplate}
        </div>
    )
}

export default MyPosts;