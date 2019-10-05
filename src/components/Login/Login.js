import React from 'react';
import LoginForm from './LoginForm';
import { signIn } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm({ email, password, captcha }) {
        // console.log(dataForm);
        this.props.signIn(email, password, captcha);
    }
    
    render() {
        
        if (this.props.isAuth) return <Redirect to="/login" />

        return (
            <div>
                <h1>
                    Login
            </h1>
                <LoginForm onSubmit={this.onSubmitForm} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessages: state.auth.errors,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password, captcha) => dispatch(signIn(email, password, captcha))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);