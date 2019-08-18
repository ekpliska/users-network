import React from 'react';
import { connect } from 'react-redux';
import { followAction, unFollowAction, setUsers } from '../../redux/user-list-reducer';
import * as axios from 'axios';
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
        api.followUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.followClick(userId)
                }
            });
    }

    onUnFollowClick = (userId) => {
        api.unFollowUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.unFollowClick(userId)
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
    console.log(state.userListPage);
    
    return {
        users: state.userListPage.users,
        isLoading: state.userListPage.isLoading,
        currentPage: state.userListPage.currentPage,
        countUsers: state.userListPage.countUsers,
        totalCount: state.userListPage.totalCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followClick: (userId) => dispatch(followAction(userId)),
        unFollowClick: (userId) => dispatch(unFollowAction(userId)),
        allUsers: (users, totalCount, currentPage) => dispatch(setUsers(users, totalCount, currentPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);