// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFSZPjYRcKH7EeLfFUZAF-Wt4x29mUzqs",
  authDomain: "blog-react-e5de5.firebaseapp.com",
  projectId: "blog-react-e5de5",
  storageBucket: "blog-react-e5de5.appspot.com",
  messagingSenderId: "217701407138",
  appId: "1:217701407138:web:05aafe9db972fcbd3bfafb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();