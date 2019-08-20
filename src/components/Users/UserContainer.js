import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, getAllUsers, followingProgress } from '../../redux/user-list-reducer';
import Users from './Users';

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
        users: state.userListPage.users,
        isLoading: state.userListPage.isLoading,
        currentPage: state.userListPage.currentPage,
        countUsers: state.userListPage.countUsers,
        totalCount: state.userListPage.totalCount,
        progress: state.userListPage.followingProgress,
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