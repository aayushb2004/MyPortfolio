// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb5w_8Clqy7ACwHSgPup6d1n-F58Rk1Hc",
    authDomain: "myportfolio-910ba.firebaseapp.com",
    databaseURL: "https://myportfolio-910ba-default-rtdb.firebaseio.com",
    projectId: "myportfolio-910ba",
    storageBucket: "myportfolio-910ba.firebasestorage.app",
    messagingSenderId: "973850311465",
    appId: "1:973850311465:web:711cdbf202e9ad26c41538",
    measurementId: "G-9SW5PLHYWV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the Realtime Database
export const database = getDatabase(app);
