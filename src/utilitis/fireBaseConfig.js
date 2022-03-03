// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArwBrkMrNE6aiVUoD_39fem5TNvzDTX40",
  authDomain: "pichichos-30222.firebaseapp.com",
  projectId: "pichichos-30222",
  storageBucket: "pichichos-30222.appspot.com",
  messagingSenderId: "704668967890",
  appId: "1:704668967890:web:82f05346d31a2daba61e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;