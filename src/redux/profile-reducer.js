import { profileAPI } from '../api';

const GET_PROFILE_USER = 'GET_PROFILE_USER';
const SET_USER_STATUS = 'GET_USER_STATUS';

const initialState = {
    profile: null,
    status: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const getProfileUser = (profile) => ({
    type: GET_PROFILE_USER,
    profile: profile
});

export const getUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status: status
});

export const getUser = (userId) => (dispatch) => {
    profileAPI.userProfile(userId)
        .then((data) => {
            dispatch(getProfileUser(data))
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then((data) => {
            dispatch(getUserStatus(data))
        });
}

export const updateMyStatus = (status) => (dispatch) => {
    profileAPI.setUserStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(getUserStatus(data))
            }
        });
}

export default ProfileReducer;