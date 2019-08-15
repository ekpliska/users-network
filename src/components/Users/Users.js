import React from 'react';
import User from './User';
import * as axios from 'axios';
import UserStyle from './User.module.css';

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsers}`)
            .then((response) => {
                this.props.allUsers(response.data.items, response.data.totalCount, this.props.currentPage)
            });
    }

    changePage = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countUsers}`)
            .then((response) => {
                this.props.allUsers(response.data.items, response.data.totalCount, pageNumber)
            });
    }

    render() {
        const { users, isLoading, followClick, unFollowClick, allUsers, totalCount, countUsers } = this.props;
        const countPages = Math.ceil(totalCount / countUsers);

        let arrayPages = [];
        for (let i = 1; i <= countPages; i++) {
            arrayPages.push(i);
        }

        return (
            <React.Fragment>
                <ul className={UserStyle.pagination}>
                    {
                        arrayPages.map(number => {
                            return (
                                <li
                                    className={this.props.currentPage === number ?
                                        UserStyle.active : ''}
                                    key={number} onClick={() => this.changePage(number)}>
                                    
                                    {number}

                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    {
                        (isLoading === false)
                            ? <p>Users are loading... wait</p>
                            : users.map((user) => {
                                return <User
                                    key={user.id}
                                    {...user}
                                    followClick={followClick}
                                    unFollowClick={unFollowClick}
                                    allUsers={allUsers}
                                />
                            })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Users;