import { createStore, combineReducers } from 'redux';
import postsReducer from './posts-reducer';
import dialogReducer from './dialogs-reducer';
import friendsReducer from './friend-reducer';
import userReducer from './user-reducer';

let reducers = combineReducers({
    userData: userReducer,
    profilePage: postsReducer,
    dialogsPage: dialogReducer,
    friendsWidget: friendsReducer,
});

let store = createStore(reducers);

export default store;