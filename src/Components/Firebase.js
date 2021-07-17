import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhWmiHLJsbyE6VAt3ENQnzFzYuC0aGLvE",
    authDomain: "facebookmessanger-273aa.firebaseapp.com",
    projectId: "facebookmessanger-273aa",
    storageBucket: "facebookmessanger-273aa.appspot.com",
    messagingSenderId: "117696906259",
    appId: "1:117696906259:web:c79b278c9abecba37eebe6",
    measurementId: "G-CR91Q2097Y"
});

let db = firebaseApp.firestore();

export default db;