import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { getProfileUser } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                // debugger;
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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);

export default ProfileContainer;