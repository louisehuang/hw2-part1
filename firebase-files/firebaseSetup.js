// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyC51-R63BCMwq5lclG5F9LPYP2N2g45dR4",
  authDomain: "assignment2-f4800.firebaseapp.com",
  projectId: "assignment2-f4800",
  storageBucket: "812762433652",
  messagingSenderId: "812762433652",
  appId: "1:812762433652:web:e65994c5c0aa3db6936921",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);