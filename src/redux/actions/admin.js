//admin.js
import { SET_SIGN_UP_FORM } from '../actionTypes';
import { db } from '../../utils/firebase';

export const fetchSignUpForm = () => async dispatch => {

    try {

        db.collection('admin').doc('signup-form').onSnapshot(doc => {

            dispatch({
                type: SET_SIGN_UP_FORM,
                sign_up_form: doc.data()
            });

        });

    } catch (err) {
        console.warn(err);
    }

};

