import firebase from 'firebase'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA2ZzzmZaZ6cP3tG0SJgoGaCKstQRMbXTA",
    authDomain: "mascot-app-e426a.firebaseapp.com",
    projectId: "mascot-app-e426a",
    storageBucket: "mascot-app-e426a.appspot.com",
    messagingSenderId: "592285253921",
    appId: "1:592285253921:web:3145e5d687978732b13e60",
    measurementId: "G-X3JGEC4MEC"
});

export function getFirebase() {
    return app
}

export function getFirestone() {
    return firebase.firestore(app)
}