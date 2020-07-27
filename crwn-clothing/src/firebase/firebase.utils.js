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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;