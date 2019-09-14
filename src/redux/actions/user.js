//user.js
import { SET_USER, SET_FOLLOWERS, SET_FRIENDS } from '../actionTypes';
import { auth, db } from '../../utils/firebase';
import { setLoading, setWarning } from './ui';
import { navigate } from '@reach/router';

/**
 * Logs in the user with the given email and password
 * @param {*} email 
 * @param {*} password 
 */
export const loginUserWithEmailPassword = ({ email, password }) => async dispatch => {

    dispatch(setLoading(true));

    try {

        await auth.signInWithEmailAndPassword(email, password);
        navigate('/');

    } catch (err) {
        console.error(err);
        dispatch(setWarning('Something went wrong, please try logging in again.'));
    }

    dispatch(setLoading(false));

};

export const logoutUser = () => async dispatch => {

    dispatch(setLoading(true));

    try {

        await auth.signOut();

    } catch (err) {
        console.error(err);
    }

    dispatch(setLoading(false));
};

/**
 * Creates the user with the given email and password
 * @param {*} email 
 * @param {*} password 
 */
export const createUserWithEmailPassword = ( userParams ) => async dispatch => {

    dispatch(setLoading(true));

    try {

        const { email, password } = userParams;
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        delete userParams.password;

        await db.collection('users').doc(user.uid).set({ ...userParams });

    } catch (err) {
        console.error(err);
    }

    dispatch(setLoading(false));

};

export const updateUser = ( userParams ) => async dispatch => {

    try {

        const user = auth.currentUser;
        await db.collection('users').doc(user.uid).update({ ...userParams });

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

export const fetchFriends = () => dispatch => {

    try {

        const user = auth.currentUser;

        db.collection('users').where("friends", "array-contains", user.uid)
        .onSnapshot(querySnapshot => {

            let friends = {};

            querySnapshot.forEach(doc => {

                const data = doc.data();
                friends[doc.id] = data;

            });

            dispatch({
                type: SET_FRIENDS,
                friends
            })

        });

    } catch (err) {
        console.error(err);
    }

};

export const fetchFollowers = () => dispatch => {

    try {

        const user = auth.currentUser;

        db.collection('users').where("follows", "array-contains", user.uid)
        .onSnapshot(querySnapshot => {

            let followers = {};

            querySnapshot.forEach(doc => {

                const data = doc.data();
                followers[doc.id] = data;

            });

            dispatch({
                type: SET_FOLLOWERS,
                followers
            })

        });

    } catch (err) {
        console.error(err);
    }

};