import React from 'react';
import { reduxForm } from 'redux-form'
import { requiredField } from '../../common/validators/ValidateForm';
import Input, { createdField } from '../../common/FormElements/Input';

const LoginForm = (props) => {
    const { handleSubmit, error, captchaUrl } = props;

    return (
        <form onSubmit={handleSubmit}>
            {createdField("Email", "email", [requiredField], Input, null, "text")}
            {createdField("Пароль", "password", [requiredField], Input, null, "password")}
            {createdField("Запомнить меня", "rememberme", null, Input, null, "checkbox")}
            {captchaUrl && <img style={{ width: '120px' }} src={captchaUrl} alt="captcha-image" />}
            {captchaUrl && createdField("", "captcha", [requiredField], Input)}
            <button type="submit">Войти</button>
            <div>
                <label>
                    {
                        error
                            ? <span>{error}</span>
                            : null
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