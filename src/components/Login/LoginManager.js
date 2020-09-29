import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


// Initialize Firebase
export const initLoginFramework = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = { name: displayName, email, photoURL }
            return signedInUser;
        }).catch(err => {
            console.log(err.message)
        });
    }