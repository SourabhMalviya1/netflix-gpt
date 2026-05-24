// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADgvslg55G_O1GRFEW9VZANbmAV4NYEyI",
  authDomain: "netflixgpt-bb6f6.firebaseapp.com",
  projectId: "netflixgpt-bb6f6",
  storageBucket: "netflixgpt-bb6f6.firebasestorage.app",
  messagingSenderId: "483793850173",
  appId: "1:483793850173:web:e61636bcf55b5bd8fc7f54",
  measurementId: "G-J8G2Q76RRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
