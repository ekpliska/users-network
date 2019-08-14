import React from 'react';
import User from './User';
import * as axios from 'axios';

class Users extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.allUsers(response.data.items)
            });
    }

    render() {
        const { users, isLoading, followClick, unFollowClick, allUsers } = this.props;
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
}

export default Users;