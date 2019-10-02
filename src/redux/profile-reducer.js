import { profileAPI } from '../api';
import { stopSubmit } from "redux-form";

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

export const getUser = (userId) => async (dispatch) => {
    const data = await profileAPI.userProfile(userId)
    dispatch(getProfileUser(data))
}

export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId);
    dispatch(getUserStatus(data))
}

export const updateMyStatus = (status) => async (dispatch) => {
    const data = await profileAPI.setUserStatus(status);
    if (data.resultCode === 0) {
        dispatch(getUserStatus(data))
    }
}

export const updateProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.updateUserProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUser(userId))
    } else {
        // debugger;
        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}

export default ProfileReducer;