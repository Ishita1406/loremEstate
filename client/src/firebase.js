// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6f870.firebaseapp.com",
  projectId: "mern-estate-6f870",
  storageBucket: "mern-estate-6f870.appspot.com",
  messagingSenderId: "383901032733",
  appId: "1:383901032733:web:075f03095640be309901f4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);