//ui.js
import { SET_TITLE } from '../actionTypes';

export const setTitle = (title) => dispatch => {
    return dispatch({
        type: SET_TITLE,
        title
    });
};
        
