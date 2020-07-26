import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDvm1CrTIrBZyjsKIcQXaUJmpEgjgy5kKw",
    authDomain: "crwndb-a7975.firebaseapp.com",
    databaseURL: "https://crwndb-a7975.firebaseio.com",
    projectId: "crwndb-a7975",
    storageBucket: "crwndb-a7975.appspot.com",
    messagingSenderId: "986399169608",
    appId: "1:986399169608:web:a72b7e282ed794edf58c7d",
    measurementId: "G-Q4WYDX5DJ6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;