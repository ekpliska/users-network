import React from 'react';
import User from './User';

const Users = (props) => {
    const { users, followClick, unFollowClick, allUsers } = props;
    if (users.length === 0) {
        allUsers([
            {
                id: 1,
                fullName: 'UserName',
                pathInfo: 'https://...',
                status: 'User status',
                follow: false,
                location: {
                    country: 'Country Name',
                    city: 'City name',
                }
            },
            {
                id: 2,
                fullName: 'UserName 2',
                pathInfo: 'https://...',
                status: 'User status 2',
                follow: true,
                location: {
                    country: 'Country Name 2',
                    city: 'City name 3',
                }
            },
        ]);
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