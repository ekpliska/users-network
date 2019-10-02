import React from 'react';
import { reduxForm } from 'redux-form';
import Input, { createdField } from '../../../common/FormElements/Input';
import TextArea from '../../../common/FormElements/TextArea';
import StyleProfileInfo from './ProfileInfo.module.css';

const ProfileForm = ({ handleSubmit, error, profile}) => {
    return (
        <form className={StyleProfileInfo.profileFormEdit} onSubmit={handleSubmit}>
            <div className={StyleProfileInfo.profileInfo}>
                <button type="submit">Сохранить</button>
                <div className={StyleProfileInfo.profileFormErrors}>
                    <label>
                        {
                            error
                                ? <span>{error}</span>
                                : null
                        }
                    </label>
                </div>
                {createdField("Имя", "fullName", [], Input, null, "text")}
                {createdField("В поиске работы", "lookingForAJob", [], Input, null, "checkbox")}
                {createdField("Мои навыки", "lookingForAJobDescription", [], TextArea, null, "textarea")}
                {createdField("Обо мне", "aboutMe", [], TextArea, null, "textarea")}
            </div>
            <div className={StyleProfileInfo.profileContact}>
                {
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                {createdField(key, `contacts.${key}`, null, Input, null, "text")}
                            </div>
                        )
                    })
                }
            </div>
        </form>
    )
}

const ProfileReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileForm)

export default ProfileReduxForm;