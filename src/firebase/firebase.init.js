// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhhkV9KZCSNAK1toXyH7zB53W6A4ofCY8",
  authDomain: "espresso-emporium-app-a3689.firebaseapp.com",
  projectId: "espresso-emporium-app-a3689",
  storageBucket: "espresso-emporium-app-a3689.firebasestorage.app",
  messagingSenderId: "29559346315",
  appId: "1:29559346315:web:e68144dfad625f0d59708e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
