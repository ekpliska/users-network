import React from 'react';
import User from './User';
import UserStyle from './User.module.css';
import Preloader from '../../common/Preloader';

const Users = (props) => {

    const { users, isLoading, onFollowClick, onUnFollowClick, allUsers, totalCount, countUsers, currentPage, progress } = props;
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
                                key={number}
                                onClick={() => props.changePage(number)}
                            >

                                {number}

                            </li>
                        )
                    })
                }
            </ul>
            <div>
                {
                    (isLoading === false)
                        ? <Preloader />
                        : users.map((user) => {
                            return <User
                                key={user.id}
                                {...user}
                                followClick={onFollowClick}
                                unFollowClick={onUnFollowClick}
                                allUsers={allUsers}
                                progress={progress}
                            />
                        })
                }
            </div>
        </React.Fragment>
    )
}

export default Users;