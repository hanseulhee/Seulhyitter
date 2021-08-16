import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRphowwZ4zdC2oB4KwubXuKGvQWxeFB0w",
  authDomain: "seulhyitter.firebaseapp.com",
  projectId: "seulhyitter",
  storageBucket: "seulhyitter.appspot.com",
  messagingSenderId: "254079137047",
  appId: "1:254079137047:web:af162146cab8a4dfcc3352",
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

export const firebaseInstance = firebase;

export const dbService = firebase.firestore();
