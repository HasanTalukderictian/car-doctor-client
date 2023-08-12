// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB3BFW05GH5JcPF-84D2n4eaJvYbBwvWE",
  authDomain: "car-doctor-client-4a1bd.firebaseapp.com",
  projectId: "car-doctor-client-4a1bd",
  storageBucket: "car-doctor-client-4a1bd.appspot.com",
  messagingSenderId: "626393873833",
  appId: "1:626393873833:web:fa39c7c67c9477eaec58b8",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;