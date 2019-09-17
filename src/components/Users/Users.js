import React from 'react';
import User from './User';
import Preloader from '../../common/Preloader';
import { Pagination } from '../../common/Pagination/Pagination';

const Users = (props) => {

    const { users, isLoading, onFollowClick, onUnFollowClick, allUsers, totalCount, countUsers, currentPage, progress } = props;

    return (
        <React.Fragment>
            <Pagination totalCount={totalCount} countUsers={countUsers} currentPage={currentPage} changePage={props.changePage} />
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