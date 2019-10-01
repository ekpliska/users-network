import React from 'react';
import ProfileStatus from './ProfileStatus';
import StyleProfileInfo from './ProfileInfo.module.css';

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <p>{contactTitle}: {contactValue}</p>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <React.Fragment>
            <div className={StyleProfileInfo.profileInfo}>
                <p>Имя: {props.profile.fullName}</p>
                <ProfileStatus status={props.status} onUpdateStatus={props.updateStatus} />
                <p>В поиске работы: {props.profile.lookingForAJob}</p>
                <p>Мои навыки: {props.profile.lookingForAJobDescription}</p>
            </div>
            <div className={StyleProfileInfo.profileContact}>
                {
                    Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default ProfileData;