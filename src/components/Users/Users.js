import React from 'react';
import User from './User';

const Users = (props) => {
    const { users, followClick, unFollowClick, allUsers } = props;
    return (
        <div>
            {
                (users.length === 0)
                    ? <p>Users not found</p>
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
    )
}

export default Users;