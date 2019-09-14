//thread.js
import { SET_THREAD, SET_THREADS } from '../actionTypes';
import { auth, db } from '../../utils/firebase';

export const fetchThread = (thread_id) => dispatch => {

    try {

        db.collection('threads').doc(thread_id).onSnapshot(doc => {

            const thread = doc.data();
            
            dispatch({
                type: SET_THREAD,
                thread
            });

        });

    } catch (err) {
        console.error(err);
    }

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
        console.error(err);
    }
}