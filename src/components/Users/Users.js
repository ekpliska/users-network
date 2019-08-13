import React from 'react';
import User from './User';
import * as axios from 'axios';

const Users = (props) => {
    const { users, followClick, unFollowClick, allUsers } = props;
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                allUsers(response.data.items)
            });
    }

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