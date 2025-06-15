// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';       // For Realtime Database
import { getStorage } from 'firebase/storage'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUp_HP1Dgnor64k5f6tfShPjxcoDlhTwA",
  authDomain: "totoro-trails.firebaseapp.com",
  projectId: "totoro-trails",
  storageBucket: "totoro-trails.firebasestorage.app",
  messagingSenderId: "115586851616",
  appId: "1:115586851616:web:b6c4c92368fcc55228ad45",
  measurementId: "G-9Z7TX2QTWX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);            // Authentication
export const rtdb = getDatabase(app);        // Realtime Database
export const storage = getStorage(app);
export const analytics = getAnalytics(app);