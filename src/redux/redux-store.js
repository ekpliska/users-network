import { createStore, combineReducers } from 'redux';
import postsReducer from './posts-reducer';
import dialogReducer from './dialogs-reducer';
import friendsReducer from './friend-reducer';
import userReducer from './user-reducer';
import userListReducer from './user-list-reducer';

let reducers = combineReducers({
    userData: userReducer,
    profilePage: postsReducer,
    dialogsPage: dialogReducer,
    friendsWidget: friendsReducer,
    userListPage: userListReducer,
});

let store = createStore(reducers);

export default store;