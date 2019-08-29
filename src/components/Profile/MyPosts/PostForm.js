import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="postMessage" component="textarea" type="text" placeholder="Ваше сообщение..." />
            </div>
            <button type="submit">Отправить</button>
        </form>
    )
}

const PostFormRedux = reduxForm({
    'form': 'addPost'
})(PostForm);

export default PostFormRedux;