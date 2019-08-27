import React from 'react';
import StyleProfileInfo from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import notFound from '../../../assets/image/user_1.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus }) => {
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
                <p>Обо мне: {profile.aboutMe}</p>
                <ProfileStatus status={status} onUpdateStatus={updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;