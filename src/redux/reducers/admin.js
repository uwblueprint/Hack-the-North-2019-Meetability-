//admin.js
import { SET_SIGN_UP_FORM } from '../actionTypes';

const initialState = {
    sign_up_form: {
        questions: []
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIGN_UP_FORM:
            return {
                ...state,
                sign_up_form: action.sign_up_form
            };
        default:
            return state;
    }
};

export default reducer;
        
