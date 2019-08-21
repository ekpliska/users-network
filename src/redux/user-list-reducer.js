import api from '../api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const FOLLOWING_PROPGRESS = 'FOLLOWING_PROPGRESS';

const initialState = {
    users: [],
    isLoading: false,
    currentPage: 1,
    countUsers: 10,
    totalCount: 0,
    followingProgress: []
}

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                // Объединени двух массивов
                users: action.users,
                isLoading: true,
                totalCount: action.totalCount,
                currentPage: action.currentPage
            }
        case FOLLOWING_PROPGRESS: {
            return {
                ...state,
                followingProgress: action.progress
                    ? [...state.followingProgress, action.userId] 
                    : state.followingProgress.filter((userId) => userId !== action.userId)
            }
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

export const setUsers = (users, totalCount, currentPage) => ({
    type: SET_USERS,
    users: users,
    totalCount: totalCount,
    currentPage: currentPage
});

export const followingProgress = (progress, userId) => ({
    type: FOLLOWING_PROPGRESS,
    progress,
    userId
});

// create thunk
export const getAllUsers = (currentPage, countUsers) => (dispatch) => {
    return (
        api.getUsers(currentPage, countUsers)
            .then((data) => {
                dispatch(setUsers(data.items, data.totalCount, currentPage))
            })
    )
}

export const follow = (userId) => (dispatch) => {
    dispatch(followingProgress(true, userId));
    api.followUser(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followAction(userId));
                dispatch(followingProgress(false, userId));
            }
        });
}

export const unFollow = (userId) => (dispatch) => {
    dispatch(followingProgress(true, userId));
    api.unFollowUser(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollowAction(userId));
                dispatch(followingProgress(false, userId));
            }
        });
}

export default userListReducer;