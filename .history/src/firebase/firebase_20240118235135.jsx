// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvXBJGJpv0Du9yOuQmZnK42OW7UKZiV90",
    authDomain: "clone-3e78d.firebaseapp.com",
    projectId: "clone-3e78d",
    storageBucket: "clone-3e78d.appspot.com",
    messagingSenderId: "1048850511376",
    appId: "1:1048850511376:web:1d09ad5764b6dbb5eefc95",
    measurementId: "G-14FZD4B33N"
    });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { auth, provider };
export default db;