import { authAPI } from '../api';

const SET_USER_DATA = 'SET_USER_DATA';
const GET_USER_PROFILE = 'GET_USER_PROFILE';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    profile: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case GET_USER_PROFILE:
            return {
                ...state,
                profile: action.data
            }
        default:
            return state;
    }
}

export const SetAuthUserData = (userId, login, email) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        login,
        email,
    }
});

export const GetMyProfile = (data) => ({
    type: GET_USER_PROFILE,
    data: data
})

export const loginThunk = () => (dispatch) => {
    authAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(SetAuthUserData(id, login, email));
            }
        });
}

export default authReducer;