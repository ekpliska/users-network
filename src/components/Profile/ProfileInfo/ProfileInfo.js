import React from 'react';
import StyleProfileInfo from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import notFound from '../../../assets/image/user_1.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={StyleProfileInfo.profile}>
            <div className={StyleProfileInfo.profileImage}>
                <img src={profile.photos.small ? profile.photos.small : notFound } alt=""></img>
            </div>
            <div className={StyleProfileInfo.profileInfo}>
                <p>Имя: {profile.fullName}</p>
                <ProfileStatus status={profile.aboutMe} />
            </div>
        </div>
    );
}

export default ProfileInfo;