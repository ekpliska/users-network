import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 1458;
        this.props.getProfile(userId);
    }

    render() {
        return (
            <ProfileInfo {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profileUser.profile,
        status: state.profileUser.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (userId) => dispatch(getUser(userId)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileInfoContainer);