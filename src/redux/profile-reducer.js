import { profileAPI } from '../api';

const GET_PROFILE_USER = 'GET_PROFILE_USER';

const initialState = {
    profile: null,
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const getProfileUser = (profile) => ({
    type: GET_PROFILE_USER,
    profile: profile
});

export const getUser = (userId) => (dispatch) => {
    profileAPI.userProfile(userId)
        .then((data) => {
            dispatch(getProfileUser(data))
        });
}

export default ProfileReducer;