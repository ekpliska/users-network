import { createStore, combineReducers } from 'redux';
import postsReducer from './posts-reducer';
import dialogReducer from './dialogs-reducer';
import friendsReducer from './friend-reducer';
import userReducer from './user-reducer';
import userListReducer from './user-list-reducer';
import ProfileReducer from './profile-reducer';

let reducers = combineReducers({
    userData: userReducer,
    postsPage: postsReducer,
    dialogsPage: dialogReducer,
    friendsWidget: friendsReducer,
    userListPage: userListReducer,
    profileUser: ProfileReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;