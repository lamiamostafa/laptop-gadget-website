// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyGPO15B6ZUq3NZk8uiA_sVHvA1sNbLoU",
    authDomain: "manufacturer-website-c89a2.firebaseapp.com",
    projectId: "manufacturer-website-c89a2",
    storageBucket: "manufacturer-website-c89a2.appspot.com",
    messagingSenderId: "959064096237",
    appId: "1:959064096237:web:a7d183c1cdff88a06cfbe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;