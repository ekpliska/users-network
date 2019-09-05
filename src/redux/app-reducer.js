import { loginThunk } from './auth-reducer';

const SET_INIZIALIZED = 'SET_INIZIALIZED';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIZIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const InitializedSuccess = () => ({ type: SET_INIZIALIZED });

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(loginThunk());
    Promise.all([promise])
        .then(() => dispatch(InitializedSuccess()));
}

export default appReducer;