//ui.js
import { SET_TITLE, SET_LOADING, SET_WARNING } from '../actionTypes';

const initialState = {
    title: 'App',
    loading: false,
    warning: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SET_WARNING:
            return {
                ...state,
                warning: action.warning
            };
        default:
            return state;
    }
};

export default reducer;

