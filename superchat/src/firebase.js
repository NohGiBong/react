// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc-id_36f8s8cvwN5-Iu7b8P1SeSGaCrM",
  authDomain: "superchat-bong.firebaseapp.com",
  projectId: "superchat-bong",
  storageBucket: "superchat-bong.appspot.com",
  messagingSenderId: "96414239247",
  appId: "1:96414239247:web:1a6c1fe7044e33b079b17a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = new getAuth(app);

export const googleAuth = new GoogleAuthProvider(app);

export const db = getFirestore(app);