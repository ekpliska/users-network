import React, { useState } from 'react';
import StyleProfileInfo from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import notFound from '../../../assets/image/user_1.jpg';
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';

const ProfileInfo = ({ profile, status, updateStatus }) => {

    const [editMode, changeEditMode] = useState(false);

    if (!profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={StyleProfileInfo.profile}>
            <div className={StyleProfileInfo.profileImage}>
                <img src={profile.photos.small ? profile.photos.small : notFound} alt=""></img>
                <button onClick={() => changeEditMode(true)}>Редактировать</button>
            </div>
            {
                editMode 
                    ? <ProfileForm />
                    : <ProfileData status={status} updateStatus={updateStatus} profile={profile} />
            }
            
        </div>
    );
}

export default ProfileInfo;