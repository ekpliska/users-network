import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {

    const onSubmitForm = (dataForm) => {
        console.log(dataForm);
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginForm onSubmit={onSubmitForm} />
        </div>
    )
}

export default Login;