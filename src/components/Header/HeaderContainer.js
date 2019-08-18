import React from 'react';
import Header from './Header';
import { SetAuthUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import api from '../../api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        api.authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    const { id, login, email } = data.data;
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