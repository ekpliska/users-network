import React from 'react';
import { Field, reduxForm } from 'redux-form';

const DialogForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" type="text" name="messageValue"></Field>
            </div>
            <button type="submit">Отправить</button>
        </form>
    )
}

const DialogFormRedux = reduxForm({
    form: 'sendMessage'
})(DialogForm);

export default DialogFormRedux;