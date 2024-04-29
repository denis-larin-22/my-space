import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "my-space-b02c1.firebaseapp.com",
    projectId: "my-space-b02c1",
    storageBucket: "my-space-b02c1.appspot.com",
    messagingSenderId: "568082725476",
    appId: "1:568082725476:web:1d6fe351c2e5ea06617d71",
    measurementId: "G-CTQKQLP0GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
