//user.js
import { SET_USER, SET_ALL_USERS, SET_FRIENDS, SET_FOLLOWING, SET_FOLLOWERS } from '../actionTypes';

const initialState = {
    user: null,
    all_users: {},
    friends: {},
    following: {},
    followers: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case SET_ALL_USERS:
            return {
                ...state,
                all_users: action.all_users
            };
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            };
        case SET_FOLLOWING:
            return {
                ...state,
                following: action.following
            };
        case SET_FOLLOWERS:
            return {
                ...state,
                followers: action.followers
            };
        default:
            return state;
    }
};

export default reducer;

