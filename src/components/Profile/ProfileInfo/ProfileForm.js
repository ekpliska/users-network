import React from 'react';
import { reduxForm } from 'redux-form';
import Input, { createdField } from '../../../common/FormElements/Input';
import TextArea from '../../../common/FormElements/TextArea';
import StyleProfileInfo from './ProfileInfo.module.css';

const ProfileForm = (props) => {
    const { handleSubmit, error } = props;

    return (
        <form className={StyleProfileInfo.profileFormEdit} onSubmit={handleSubmit}>
            <div className={StyleProfileInfo.profileInfo}>
                <button type="submit">Сохранить</button>
                <label>
                    {
                        error
                            ? <span>{error}</span>
                            : null
                    }
                </label>
                {createdField("Имя", "fullName", [], Input, null, "text")}
                {createdField("В поиске работы", "lookingForAJob", [], Input, null, "checkbox")}
                {createdField("Мои навыки", "lookingForAJobDescription", [], TextArea, null, "checkbox")}
            </div>
            <div className={StyleProfileInfo.profileContact}>
                {
                    Object.keys(props.profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                {createdField(key, `contacts.${key}`, [], Input, null, "text")}
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