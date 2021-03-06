import React from 'react';
import { connect } from 'react-redux';
import { getUser, getStatus, updateMyStatus, updateProfile, savePhoto } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileInfoContainer extends React.Component {

    fesreshProfile() { 
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.fesreshProfile();
    }

    componentDidUpdate(prevState, prevProps, snapshot) {
        if (this.props.match.params.userId !== prevState.match.params.userId) {
            this.fesreshProfile();
        }
    }

    render() {
        return (
            <ProfileInfo {...this.props} isOwner={!this.props.match.params.userId} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profileUser.profile,
        status: state.profileUser.status,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (userId) => dispatch(getUser(userId)),
        getUserStatus: (userId) => dispatch(getStatus(userId)),
        updateStatus: (status) => dispatch(updateMyStatus(status)),
        updateProfile: (profile) => dispatch(updateProfile(profile)),
        savePhoto: (files) => dispatch(savePhoto(files))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileInfoContainer);