// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import emailjs from '@emailjs/browser';

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

// EmailJS Configuration
// Get these values from your EmailJS dashboard at https://www.emailjs.com/
const emailjsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'demo_public_key',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'demo_service',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'demo_template',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  // Initialize EmailJS only if we have a valid public key
  if (emailjsConfig.publicKey !== 'demo_public_key') {
    emailjs.init(emailjsConfig.publicKey);
  }
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db, emailjs, emailjsConfig };