// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_DVCWx6_jPYcosxmKDdr_SRSNN4RVJV8",
  authDomain: "auth-c6ce6.firebaseapp.com",
  projectId: "auth-c6ce6",
  storageBucket: "auth-c6ce6.firebasestorage.app",
  messagingSenderId: "328778128007",
  appId: "1:328778128007:web:225f7f0793f1efb0f43622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app ,auth };