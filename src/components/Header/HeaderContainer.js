import React from 'react';
import * as axios from 'axios';
import Header from './Header';
import { SetAuthUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const { id, login, email } = response.data.data;
                    this.props.setUserData(id, login, email);
                }
            });
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
        setUserData: (userId, login, email) => dispatch(SetAuthUserData(userId, login, email)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)