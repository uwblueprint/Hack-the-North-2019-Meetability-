//thread.js
import { SET_THREAD, SET_THREADS } from '../actionTypes';

const initialState = {
    thread_id: null,
    threads: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THREAD:
            return {
                ...state,
                thread_id: action.thread_id
            };
        case SET_THREADS:
            return {
                ...state,
                threads: action.threads
            }
        default:
            return state;
    }
};

export default reducer;
        
