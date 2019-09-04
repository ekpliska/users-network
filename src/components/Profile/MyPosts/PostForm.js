import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../../../common/FormElements/TextArea';
import { requiredField, maxLength } from '../../../common/validators/ValidateForm';

const maxLengthValidator = maxLength(30);

const PostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="postMessage"
                    component={TextArea}
                    type="text"
                    placeholder="Ваше сообщение..."
                    validate={[requiredField, maxLengthValidator]}
                />
            </div>
            <button type="submit">Отправить</button>
        </form>
    )
}

const PostFormRedux = reduxForm({
    form: 'addPost'
})(PostForm);

export default PostFormRedux;