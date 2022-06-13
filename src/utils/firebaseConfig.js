// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmcJxuj0sW4v-KP0_p962lP9t-OqClCAU",
  authDomain: "willebald-photo.firebaseapp.com",
  projectId: "willebald-photo",
  storageBucket: "willebald-photo.appspot.com",
  messagingSenderId: "552999276591",
  appId: "1:552999276591:web:d6e9d60d63b3e3e99f76da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
