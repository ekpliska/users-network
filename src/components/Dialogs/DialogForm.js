import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../../common/FormElements/TextArea';
import { requiredField, maxLength } from '../../common/validators/ValidateForm';

const maxLengthValidator = maxLength(30);

const DialogForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={TextArea}
                    type="text"
                    name="messageValue"
                    validate={[requiredField, maxLengthValidator]}
                >
                </Field>
            </div>
            <button type="submit">Отправить</button>
        </form>
    )
}

const DialogFormRedux = reduxForm({
    form: 'sendMessage'
})(DialogForm);

export default DialogFormRedux;