//ui.js
import { SET_TITLE } from '../actionTypes';

const initialState = {
    title: 'App'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            };
        default:
            return state;
    }
};

export default reducer;
        
