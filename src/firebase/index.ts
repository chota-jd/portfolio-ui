// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZU3WoYaEpJj0QpfnZFkcBU3XP51663QY",
  authDomain: "portfolio-chirag-74ca1.firebaseapp.com",
  projectId: "portfolio-chirag-74ca1",
  storageBucket: "portfolio-chirag-74ca1.firebasestorage.app",
  messagingSenderId: "1094351760239",
  appId: "1:1094351760239:web:73a6a15f2b52a58574d69a",
  measurementId: "G-DLNVPSPP9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };