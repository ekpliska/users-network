import React from 'react';
import Header from './Header';
import { loginThunk, singOut } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.loginThunk();
    }

    render() {
        return (
            <Header {... this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginThunk: () => dispatch(loginThunk()),
        logOut: () => dispatch(singOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)