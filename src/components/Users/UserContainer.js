import React from 'react';
import { connect } from 'react-redux';
import { followAction, unFollowAction, setUsers, followingProgress } from '../../redux/user-list-reducer';
import Users from './Users';
import api from '../../api';

class UsersContainer extends React.Component {

    componentDidMount() {

        const { currentPage, countUsers, allUsers } = this.props;
        api.getUsers(currentPage, countUsers)
            .then((data) => {
                allUsers(data.items, data.totalCount, currentPage)
            });
    }

    changePage = (pageNumber) => {
        const { countUsers, allUsers } = this.props;
        api.getUsers(pageNumber, countUsers)
            .then((data) => {
                allUsers(data.items, data.totalCount, pageNumber)
            });
    }

    onFollowClick = (userId) => {
        this.props.setProgress(true, userId);
        api.followUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.followClick(userId);
                    this.props.setProgress(false, userId);
                }
            });
    }

    onUnFollowClick = (userId) => {
        this.props.setProgress(true, userId);
        api.unFollowUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.unFollowClick(userId);
                    this.props.setProgress(false, userId);
                }
            });
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
        followClick: (userId) => dispatch(followAction(userId)),
        unFollowClick: (userId) => dispatch(unFollowAction(userId)),
        allUsers: (users, totalCount, currentPage) => dispatch(setUsers(users, totalCount, currentPage)),
        setProgress: (progress, userId) => dispatch(followingProgress(progress, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);