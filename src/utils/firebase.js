// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZrUEYDTRNWcKhnrvuJidrzlG4SYYoxe8",
  authDomain: "react-auth-ba1b2.firebaseapp.com",
  projectId: "react-auth-ba1b2",
  storageBucket: "react-auth-ba1b2.appspot.com",
  messagingSenderId: "844684991684",
  appId: "1:844684991684:web:3aa3e088db6d0a60dc3d91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
