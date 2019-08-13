import React from 'react';
// import styleProfile from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
    // debugger;
    return (
        <div className="content">
            <ProfileInfo></ProfileInfo>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;