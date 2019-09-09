import { createSelector } from 'reselect';

const users = (state) => {
    return state.userListPage.users;
}

export const getUsersSelector = createSelector(users, ((users) => {
    return users.filter(user => true)
}));

export const statusLoading = (state) => {
    return state.userListPage.isLoading;
}

export const getCurrentPage = (state) => {
    return state.userListPage.currentPage
}

export const getCountUsers = (state) => {
    return state.userListPage.countUsers;
}

export const getTotalCount = (state) => {
    return state.userListPage.totalCount;
}

export const getFollowingProgress = (state) => {
    return state.userListPage.followingProgress;
}