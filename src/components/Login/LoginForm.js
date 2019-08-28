import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    const { handleSubmit, errorMessages } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Имя</label>
            <div>
                <Field name="email" component="input" type="text" />
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
            <div>
                <label>
                    {
                        errorMessages.map((error, index) => {
                            return <p key={index}>{error}</p>
                        })
                    }
                </label>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export default LoginReduxForm;