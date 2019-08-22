import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getProfile(userId);
    }

    render() {
        return (
            <ProfileInfo {...this.props} />
        )
    }

}

const AuthRedirect = WithAuthRedirect(ProfileInfoContainer);

const mapStateToProps = (state) => {
    return {
        profile: state.profileUser.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (userId) => dispatch(getUser(userId)),
    }
}

const ProfileRouter = withRouter(AuthRedirect);

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileRouter);

export default ProfileContainer;