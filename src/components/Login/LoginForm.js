import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login">Имя</label>
            <div>
                <Field name="login" component="input" type="text" />
            </div>
            <label htmlFor="password">Пароль</label>
            <div>
                <Field name="password" component="input" type="text" />
            </div>
            <div>
                <Field name="password" component="input" type="checkbox" />
                <label htmlFor="password">Запомнить меня</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export default LoginReduxForm;