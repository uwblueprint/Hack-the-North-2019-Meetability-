//thread.js
import { SET_THREAD, SET_THREADS } from '../actionTypes';
import firebase, { auth, db } from '../../utils/firebase';
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

                console.log('THREADS', threads)

                dispatch({
                    type: SET_THREADS,
                    threads
                })

            });

    } catch (err) {
        console.error(err);
    }
}

export const sendMessage = content => async dispatch => {

    try {

        const user = auth.currentUser;
        const thread_id = store.getState().thread.thread_id;
        const thread = store.getState().thread.threads[thread_id];
        const messages = thread.messages;

        let dt = new Date();

        await db.collection('threads').doc(thread_id).update({
            messages: [...thread.messages, {
                content,
                from: user.uid,
                timestamp: dt.toISOString()
            }]
        });

    } catch (err) {
        console.error(err);
    }

}