import React from 'react';
import User from './User';
import UserStyle from './User.module.css';

const Users = (props) => {

    const { users, isLoading, followClick, unFollowClick, allUsers, totalCount, countUsers, currentPage } = props;
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
                                className={currentPage === number ?
                                    UserStyle.active : ''}
                                key={number} onClick={() => props.changePage(number)}>

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

export default Users;