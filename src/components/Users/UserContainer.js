import React from 'react';
import { connect } from 'react-redux';
import { followAction, unFollowAction, setUsers } from '../../redux/user-list-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsers}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "f0d3c4b5-148d-4cc0-8dde-53b6f59972c8"
                }
            })
            .then((response) => {
                this.props.allUsers(response.data.items, response.data.totalCount, this.props.currentPage)
            });
    }

    changePage = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countUsers}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "f0d3c4b5-148d-4cc0-8dde-53b6f59972c8"
            }
        })
            .then((response) => {
                this.props.allUsers(response.data.items, response.data.totalCount, pageNumber)
            });
    }

    onFollowClick = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "f0d3c4b5-148d-4cc0-8dde-53b6f59972c8"
            }
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.followClick(userId)
                }
            });
    }

    onUnFollowClick = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "f0d3c4b5-148d-4cc0-8dde-53b6f59972c8"
            }
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
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

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UserContainer;