const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


// users: [
//     {
//         id: 1,
//         fullName: 'UserName',
//         pathInfo: 'https://...',
//         status: 'User status',
//         follow: false,
//         location: {
//             country: 'Country Name',
//             city: 'City name',
//         }
//     }
// ]

const initialState = {
    users: null
}

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].filter((user) => {
                    if (user.id === action.userId) {
                        return { ...user, follow: true };
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].filter((user) => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                // Объединени двух массивов
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAction = (userId) => ({
    type: FOLLOW,
    userId: userId
});

export const unFollowAction = (userId) => ({
    type: UNFOLLOW,
    userId: userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
});

export default userListReducer;