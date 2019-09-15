//user.js
import { SET_USER, SET_ALL_USERS, SET_FOLLOWERS, SET_FRIENDS, SET_FOLLOWING } from '../actionTypes';
import { auth, db } from '../../utils/firebase';
import { setLoading, setWarning } from './ui';
import { fetchThreads } from './thread';
import { fetchSignUpForm } from './admin';
import { navigate } from '@reach/router';
import store from '../store';

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
        console.warn(err);
        dispatch(setWarning('Something went wrong, please try logging in again.'));
    }

    dispatch(setLoading(false));

};

export const logoutUser = () => async dispatch => {

    dispatch(setLoading(true));

    try {

        await auth.signOut();

    } catch (err) {
        console.warn(err);
    }

    dispatch(setLoading(false));
};

/**
 * Creates the user with the given email and password
 * @param {*} email 
 * @param {*} password 
 */
export const createUserWithEmailPassword = (userParams) => async dispatch => {

    dispatch(setLoading(true));

    try {

        const { email, password } = userParams;
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        delete userParams.password;

        await db.collection('users').doc(user.uid).set({ ...userParams });
        navigate('createProfile');

    } catch (err) {
        console.warn(err);
    }

    dispatch(setLoading(false));

};

export const updateUser = (userParams) => async dispatch => {

    try {

        const user = auth.currentUser;

        await db.collection('users').doc(user.uid).update({ ...userParams });

    } catch (err) {
        console.warn(err);
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

                    dispatch(fetchAllUsers());
                    dispatch(fetchFriends());
                    dispatch(fetchFollowing());
                    dispatch(fetchFollowers());
                    dispatch(fetchThreads());

                });

            } else {

                dispatch({
                    type: SET_USER
                });
            }

            dispatch(fetchSignUpForm());

        });

        return unsubscribe;

    } catch (err) {
        console.warn(err);
    }
};

export const fetchAllUsers = () => dispatch => {

    try {

        db.collection('users').onSnapshot(querySnapshot => {

            let all_users = {};

            querySnapshot.forEach(doc => {

                const data = doc.data();
                all_users[doc.id] = data;

            });

            dispatch({
                type: SET_ALL_USERS,
                all_users
            })

        });

    } catch (err) {
        console.warn(err);
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
        console.warn(err);
    }

};

export const fetchFollowing = () => dispatch => {

    try {

        const user = store.getState().user.user;


        db.collection('users')
            .onSnapshot(querySnapshot => {

                let following = {};

                querySnapshot.forEach(doc => {

                    if (user.following && user.following.length && user.following.includes(doc.id)) {
                        const data = doc.data();
                        following[doc.id] = data;

                    }

                });

                dispatch({
                    type: SET_FOLLOWING,
                    following
                })

            });

    } catch (err) {
        console.warn(err);
    }

};

export const fetchFollowers = () => dispatch => {

    try {

        const user = auth.currentUser;

        db.collection('users').where("following", "array-contains", user.uid)
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
        console.warn(err);
    }

};

export const addFriend = (otherUserId) => async dispatch => {

    try {

        const userCred = auth.currentUser;
        let user = store.getState().user.user;
        let otherUser = store.getState().user.all_users[otherUserId];

        if (!user || !otherUser) return;

        let userFriends = user.friends || [];
        let otherUserFriends = otherUser.friends || [];

        if(userFriends.includes(otherUserId)) return;

        await db.collection('users').doc(userCred.uid).update({ friends: [...userFriends, otherUserId] });
        await db.collection('users').doc(otherUserId).update({ friends: [...otherUserFriends, userCred.uid] });

    } catch (err) {
        console.warn(err);
    }

};

export const followUser = (otherUserId) => async dispatch => {

    try {

        const userCred = auth.currentUser;
        let user = store.getState().user.user;
        let otherUser = store.getState().user.all_users[otherUserId];

        if (!user || !otherUser) return;

        let userFollowing = user.following || [];
        if(userFollowing.includes(otherUserId)) return;

        await db.collection('users').doc(userCred.uid).update({ following: [...userFollowing, otherUserId] });

    } catch (err) {
        console.warn(err);
    }

};