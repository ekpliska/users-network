import React from 'react';
import { connect } from 'react-redux';
import { getProfileUser } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';
import { withRouter } from 'react-router-dom'
import api from '../../../api';

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        api.userProfile(userId)
            .then((data) => {
                this.props.getProfile(data)
            });

    }

    render() {
        return (
            <ProfileInfo {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profileUser.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (profile) => dispatch(getProfileUser(profile))
    }
}

const ProfileRouter = withRouter(ProfileInfoContainer);

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileRouter);

export default ProfileContainer;