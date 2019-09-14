//user.js
import { SET_USER, SET_FRIENDS, SET_FOLLOWERS } from '../actionTypes';

const initialState = {
    user: null,
    friends: [],
    followers: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
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

