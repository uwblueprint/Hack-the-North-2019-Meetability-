//user.js
import { SET_USER } from '../actionTypes';

const initialState = {
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default reducer;
        
