import { authAPI, securityAPI } from '../api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const SIGN_IN = 'SIGN_IN';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    profile: null,
    captcha: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.data,
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
            }
        default:
            return state;
    }
}

export const SetAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        login,
        email,
        isAuth
    }
});

export const GetMyProfile = (data) => ({
    type: GET_USER_PROFILE,
    data: data
});

export const SignInAction = (userId) => ({
    type: SIGN_IN,
    userId: userId
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL,
    data: { captchaUrl }
})

export const loginThunk = () => (dispatch) => {
    return authAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                const { id, login, email } = data.data;
                dispatch(SetAuthUserData(id, login, email, true));
            }
        })
}

export const signIn = (email, password) => async (dispatch) => {
    let data = await authAPI.singIn(email, password)
    if (data.resultCode === 1) {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let errorActionForm = stopSubmit('login', { _error: data.messages[0] ? data.messages[0] : data.messages[1] });
        dispatch(errorActionForm);
    } else if (data.resultCode === 0) {
        dispatch(SignInAction(data.userId, null));
        dispatch(loginThunk());
    }
}

export const singOut = () => (dispatch) => {
    authAPI.singOut()
        .then(() => {
            dispatch(SetAuthUserData(null, null, null, false));
        })
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
} 

export default authReducer;