//user.js
import { SET_USER } from '../actionTypes';
import { auth, db } from '../../utils/firebase';

/**
 * Logs in the user with the given email and password
 * @param {*} email 
 * @param {*} password 
 */
export const loginUserWithEmailPassword = ({email, password}) => async dispatch => {

    try {

        await auth.signInWithEmailAndPassword(email, password);

    } catch (err) {
        console.error(err);
    }
};

export const logoutUser = () => async dispatch => {

    try {

        await auth.signOut();

    } catch (err) {
        console.error(err);
    }
};

/**
 * Creates the user with the given email and password
 * @param {*} email 
 * @param {*} password 
 */
export const createUserWithEmailPassword = ({username, email, password}) => async dispatch => {

    try {

        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await db.collection('users').doc(user.uid).set({username, email});

        console.log(user);

    } catch (err) {
        console.error(err);
    }
};

/**
 * Creates a listener to the current user's data the database
 */
export const fetchUser = () => dispatch => {

    try {

        const unsubscribe = auth.onAuthStateChanged(user => {

            if (user) {

                db.collection('users').doc(user.uid).onSnapshot(doc => {

                        dispatch({
                            type: SET_USER,
                            user: doc.data()
                        });

                });

            } else {

                dispatch({
                    type: SET_USER
                });
            }

        });

        return unsubscribe;

    } catch (err) {
        console.error(err);
    }
};