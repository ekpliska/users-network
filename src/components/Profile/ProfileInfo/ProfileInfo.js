import React from 'react';
import StyleProfileInfo from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import notFound from '../../../assets/image/user_1.jpg';
import ProfileStatus from './ProfileStatus';

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <p>{contactTitle}: {contactValue}</p>
        </div>
    )
}

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
                <ProfileStatus status={status} onUpdateStatus={updateStatus} />
                <p>В поиске работы: {profile.lookingForAJob}</p>
                <p>Мои навыки: {profile.lookingForAJobDescription}</p>
            </div>
            <div className={StyleProfileInfo.profileContact}>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
        </div>
    );
}

export default ProfileInfo;