import React from 'react';
// import styleProfile from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileContainer from './ProfileInfo/ProfileContainer';

const Profile = () => {
    return (
        <div className="content">
            <ProfileContainer />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;