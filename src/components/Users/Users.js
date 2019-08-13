import React from 'react';
import User from './User';
import * as axios from 'axios';

const Users = (props) => {
    const { users, isLoading, followClick, unFollowClick, allUsers } = props;
    if (isLoading === false) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                allUsers(response.data.items)
            });
        
    }

    return (
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
    )
}

export default Users;