// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEv2bQ-bGIwwpiDPY7gnJ2O0V8ZzJMAUs",
  authDomain: "anwale-d6d28.firebaseapp.com",
  projectId: "anwale-d6d28",
  storageBucket: "anwale-d6d28.appspot.com",
  messagingSenderId: "818176739790",
  appId: "1:818176739790:web:9609798c2af5b2ed6e839f",
  measurementId: "G-LSQG8NW6DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


export {auth, provider}
  
