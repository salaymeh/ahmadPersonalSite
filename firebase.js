// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig= {
  apiKey: "AIzaSyBMQ5BAXJi5hYwpCi1D_ovk8VRgZiYnQ8c",
  authDomain: "personal-website-1a13a.firebaseapp.com",
  projectId: "personal-website-1a13a",
  storageBucket: "personal-website-1a13a.appspot.com",
  messagingSenderId: "770895328031",
  appId: "1:770895328031:web:ade301709c422b7b10f62a",
  measurementId: "G-6EEQGFWWV9"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);
const db = getFirestore(app)

export {auth,provider,db}