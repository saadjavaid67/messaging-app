import React, { useState } from "react";
import Home from "./Home";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyB2Or8Dxmwd8m_iptGEFcqN579BN1dzk",
    authDomain: "message-app-b2d31.firebaseapp.com",
    projectId: "message-app-b2d31",
    storageBucket: "message-app-b2d31.appspot.com",
    messagingSenderId: "939057848458",
    appId: "1:939057848458:web:9efb13d3cf5d74bd9d4d73",
    measurementId: "G-B21M3PZ13F"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
function Login() {


    const firestore = firebase.firestore();
    const [_user] = useAuthState(auth)
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    let name;
    try {
        name = (_user.displayName)
    } catch (error) {
        console.log(error)
    }
    return (

        (name) ? (<Home user={name} />) : (<button id="login" onClick={signInWithGoogle}>Login</button>));
};
const signOut = () => {
    return auth.currentUser && (<button onClick={() => auth.signOut()}>SignOut</button>)
}

export default { Login, signOut };
