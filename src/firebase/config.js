// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCRJgUH2rEU9O0tJf6OjK20ni3sgIE3QqY",
  authDomain: "atomsmart-563d3.firebaseapp.com",
  projectId: "atomsmart-563d3",
  storageBucket: "atomsmart-563d3.appspot.com",
  messagingSenderId: "616525628305",
  appId: "1:616525628305:web:bf00d7c51843d2246ed030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const database= getFirestore(app);
export const storage= getStorage(app);

export default app;