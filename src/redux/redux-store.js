import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './posts-reducer';
import dialogReducer from './dialogs-reducer';
import friendsReducer from './friend-reducer';
import userReducer from './user-reducer';
import userListReducer from './user-list-reducer';
import ProfileReducer from './profile-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    userData: userReducer,
    postsPage: postsReducer,
    dialogsPage: dialogReducer,
    friendsWidget: friendsReducer,
    userListPage: userListReducer,
    profileUser: ProfileReducer,
    auth:  authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;