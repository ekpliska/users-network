import { authAPI } from '../api';

const SET_USER_DATA = 'SET_USER_DATA';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const SIGN_IN = 'SIGN_IN';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    profile: null,
    errors: [],
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
        case SIGN_IN: 
            return {
                ...state,
                userId: action.userId,
                errors: action.errors
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
});

export const SignInAction = (userId, errors) => ({
    type: SIGN_IN,
    userId: userId,
    errors: errors
});

export const loginThunk = () => (dispatch) => {
    authAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(SetAuthUserData(id, login, email));
            }
        });
}

export const signIn = (email, password) => (dispatch) => {
    authAPI.singIn(email, password)
        .then((data) => {
            if (data.resultCode === 1) {
                dispatch(SignInAction(null, data.messages));
            } else if (data.resultCode === 0) {
                dispatch(SignInAction(null, data.userId));
            }
        })
}

export default authReducer;