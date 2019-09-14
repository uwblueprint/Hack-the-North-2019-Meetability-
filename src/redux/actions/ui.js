//ui.js
import { SET_TITLE, SET_WARNING, SET_LOADING } from '../actionTypes';

export const setTitle = (title) => dispatch => {
    return dispatch({
        type: SET_TITLE,
        title
    });
};

export const setWarning = (warning = '') => dispatch => {
    return dispatch({
        type: SET_WARNING,
        warning
    });
};
        
export const setLoading = (loading = false) => dispatch => {
    return dispatch({
        type: SET_LOADING,
        loading
    });
};