import React from 'react';
import { reduxForm } from 'redux-form';
import Input, { createdField } from '../../../common/FormElements/Input';
import TextArea from '../../../common/FormElements/TextArea';
import StyleProfileInfo from './ProfileInfo.module.css';

const ProfileForm = (props) => {
    return (
        <form className={StyleProfileInfo.profileFormEdit}>
            <div className={StyleProfileInfo.profileInfo}>
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
                        // return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
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