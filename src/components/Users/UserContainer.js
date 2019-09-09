import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, getAllUsers, followingProgress } from '../../redux/user-list-reducer';
import Users from './Users';
import { getUsersSelector, statusLoading, getCurrentPage, getCountUsers, getTotalCount, getFollowingProgress } from '../../redux/selectors/user-reselect';

class UsersContainer extends React.Component {

    componentDidMount() {

        const { currentPage, countUsers, allUsers } = this.props;
        allUsers(currentPage, countUsers, allUsers);
    }

    changePage = (pageNumber) => {
        const { countUsers, allUsers } = this.props;
        allUsers(pageNumber, countUsers, allUsers);
    }

    onFollowClick = (userId) => {
        this.props.followClick(userId);
    }

    onUnFollowClick = (userId) => {
        this.props.unFollowClick(userId);
    }

    render() {
        return (
            <Users
                {...this.props}
                changePage={this.changePage}
                onFollowClick={this.onFollowClick}
                onUnFollowClick={this.onUnFollowClick}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        isLoading: statusLoading(state),
        currentPage: getCurrentPage(state),
        countUsers: getCountUsers(state),
        totalCount: getTotalCount(state),
        progress: getFollowingProgress(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followClick: (userId) => dispatch(follow(userId)),
        unFollowClick: (userId) => dispatch(unFollow(userId)),
        allUsers: (users, totalCount, currentPage) => dispatch(getAllUsers(users, totalCount, currentPage)),
        setProgress: (progress, userId) => dispatch(followingProgress(progress, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);