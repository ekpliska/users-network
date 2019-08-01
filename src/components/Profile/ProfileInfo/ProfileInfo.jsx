import React from 'react';
import StyleProfileInfo from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={StyleProfileInfo.profile}>
            <div className={StyleProfileInfo.profileImage}>
                <img src="https://animaljournal.ru/articles/pets/dogs/angliyskiy_koker_spaniel/angliyskiy_koker_spaniel.jpg"></img>
            </div>
            <div className={StyleProfileInfo.profileInfo}>
                <p>NickName</p>
                <p>About me</p>
            </div>
        </div>
    );
}

export default ProfileInfo;