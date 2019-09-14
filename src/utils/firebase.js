import config from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp(config);

if (process.env.REACT_APP_LOCAL_FUNCTIONS === "true") {
    console.log('React app started using local functions.');
    app.functions().useFunctionsEmulator('http://localhost:5000');
}

export default app;
export const functions = app.functions();
export const db = app.firestore();
export const auth = app.auth();