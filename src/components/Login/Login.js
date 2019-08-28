import React from 'react';
import LoginForm from './LoginForm';
import { signIn } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

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
        errorMessages: state.auth.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password) => dispatch(signIn(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);