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

    onSubmitForm({ email, password }) {
        // console.log(dataForm);
        this.props.signIn(email, password);
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
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password) => dispatch(signIn(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);