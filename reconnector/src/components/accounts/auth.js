import React from 'react'
import firebase from '../../firebase'

export const signIn = () => {
    var Provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(Provider).then(res => alert(`Thank you ${res.user.email} for joining with us!`)).catch(err => alert(err));
}

export const signOut = () => {
    firebase.auth().signOut();
}
export const initFirebaseAuth = () => {
    // firebase.auth().onAuthStateChanged(authStateObserver);
}

export const getProfilePicUrl = () => {
    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

export const getUserName = () => {
    return firebase.auth().currentUser.displayName;
}

export const isLoggedIn = () => {
    return !!firebase.auth().currentUser;
}