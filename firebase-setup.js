// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf3w3osCrlXqIRhbAcRFpYkg-JAVWCidQ",
  authDomain: "ac-experiment.firebaseapp.com",
  projectId: "ac-experiment",
  storageBucket: "ac-experiment.firebasestorage.app",
  messagingSenderId: "83447059204",
  appId: "1:83447059204:web:c1d18e7d50ee80e673f651",
  measurementId: "G-1BYENTEQ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance for use in other parts of your application