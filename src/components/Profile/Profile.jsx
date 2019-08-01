import React from 'react';
import styleProfile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    // debugger;
    return (
        <div className="content">
            <ProfileInfo></ProfileInfo>
            <MyPostsContainer
                store={props}
                dispatch={props.dispatch}
            ></MyPostsContainer>
            {/* <MyPosts
                posts={props.posts.posts}
                dispatch={props.dispatch}
                newPostText={props.posts.newPostText}>
            </MyPosts> */}
        </div>
    )
}

export default Profile;