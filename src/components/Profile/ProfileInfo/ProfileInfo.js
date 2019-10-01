import React, { useState } from 'react';
import StyleProfileInfo from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import notFound from '../../../assets/image/user_1.jpg';
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner }) => {

    const [editMode, changeEditMode] = useState(false);

    const onEdit = () => {
        return changeEditMode(true)
    }

    if (!profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={!editMode ? StyleProfileInfo.profile : StyleProfileInfo.profileForm}>
            <div className={StyleProfileInfo.profileImage}>
                <img src={profile.photos.small ? profile.photos.small : notFound} alt=""></img>
            </div>
            {
                editMode 
                    ? <ProfileForm profile={profile} />
                    : <ProfileData
                            status={status}
                            updateStatus={updateStatus}
                            profile={profile}
                            isOwner={isOwner}
                            onEdit={onEdit}
                    />
            }
            
        </div>
    );
}

export default ProfileInfo;