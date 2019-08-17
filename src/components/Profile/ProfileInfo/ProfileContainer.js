import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { getProfileUser } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';
import { withRouter } from 'react-router-dom'

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.getProfile(response.data)
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