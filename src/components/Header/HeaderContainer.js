import React from 'react';
import Header from './Header';
import { singOut } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {... this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(singOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)