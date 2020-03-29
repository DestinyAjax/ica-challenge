import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrmVN4XVq5JOiX81gvwlc9FS-ur5OsC70",
    authDomain: "ica-code-challenge.firebaseapp.com",
    databaseURL: "https://ica-code-challenge.firebaseio.com",
    projectId: "ica-code-challenge",
    storageBucket: "ica-code-challenge.appspot.com",
    messagingSenderId: "128472762517",
    appId: "1:128472762517:web:0c9e1cab69f1e53403b39c",
    measurementId: "G-ZQ3P1MJKMZ"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;
const storage = firebase.storage();

// const usersCollection = db.collection('users')
const playersCollection = db.collection('players')

export {
    db,
    auth,
    currentUser,
    storage,
    // usersCollection,
    playersCollection,
}