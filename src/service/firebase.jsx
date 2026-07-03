// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//apiKey: "AIzaSyDuxHKsyp67goAQAOo_2afCn197L7hUE6I",

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ruta-sport.firebaseapp.com",
  projectId: "ruta-sport",
  storageBucket: "ruta-sport.firebasestorage.app",
  messagingSenderId: "645018090035",
  appId: "1:645018090035:web:7192b0027bf3e5172f0146",
  measurementId: "G-0TFT0B0TNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//OBTENER LA BASE DE DATOS EN UNA CONSTANTE
export const db = getFirestore(app);