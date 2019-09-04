import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../common/validators/ValidateForm';
import Input from '../../common/FormElements/Input';

const LoginForm = (props) => {
    const { handleSubmit, errorMessages } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Имя</label>
            <div>
                <Field name={"email"} component={Input} type="text" validate={[requiredField]} />
            </div>
            <label htmlFor="password">Пароль</label>
            <div>
                <Field name={"password"} component={Input} type="text" validate={[requiredField]}/>
            </div>
            <div>
                <Field name="password" component="input" type="checkbox" />
                <label htmlFor="password">Запомнить меня</label>
            </div>
            <button type="submit">Войти</button>
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