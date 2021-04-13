import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAnFcl9E0njGX-6oGQOT-gVCd6karz8dkQ",
    authDomain: "my-college-90543.firebaseapp.com",
    projectId: "my-college-90543",
    storageBucket: "my-college-90543.appspot.com",
    messagingSenderId: "82297303546",
    appId: "1:82297303546:web:7953b3e09589746739b443",
    measurementId: "G-71R01NWLYM"
});

const db = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;
    // , auth, storage};
