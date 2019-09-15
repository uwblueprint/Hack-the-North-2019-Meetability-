//thread.js
import { SET_THREAD, SET_THREADS } from '../actionTypes';
import { auth, db } from '../../utils/firebase';
import store from '../store';

export const fetchThread = (thread_id) => dispatch => {

    dispatch({
        type: SET_THREAD,
        thread_id
    });

};

export const fetchThreads = () => dispatch => {

    try {

        const user = auth.currentUser;

        db.collection('threads').where("users", "array-contains", user.uid)
            .onSnapshot(querySnapshot => {

                let threads = {};

                querySnapshot.forEach(doc => {

                    const data = doc.data();
                    threads[doc.id] = data;

                });

                dispatch({
                    type: SET_THREADS,
                    threads
                })

            });

    } catch (err) {
        console.warn(err);
    }
}

export const createThread = other_user_id => async dispatch => {

    try {

        const user = auth.currentUser;
        const threads = Object.values(store.getState().thread.threads);
        const otherUserThreads = threads.filter(thread => thread.users && thread.users.includes(other_user_id));

        if (otherUserThreads && otherUserThreads.length > 0) return;

        let newThreadRef = db.collection('threads').doc();
        await newThreadRef.set({
            messages: [],
            users: [user.uid, other_user_id]
        });

        dispatch({
            SET_THREAD,
            thread_id: newThreadRef.key
        })

    } catch (err) {
        console.warn(err);
    }

}

export const sendMessage = content => async dispatch => {

    try {

        const user = auth.currentUser;
        const thread_id = store.getState().thread.thread_id;
        const thread = store.getState().thread.threads[thread_id];

        let dt = new Date();

        await db.collection('threads').doc(thread_id).update({
            messages: [...thread.messages, {
                content,
                from: user.uid,
                timestamp: dt.toISOString()
            }]
        });

    } catch (err) {
        console.warn(err);
    }

}