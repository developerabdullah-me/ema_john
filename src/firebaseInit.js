// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrgUG_6PIUWVET-BT2Zd9d0tRjmt9IeTc",
  authDomain: "emajhon-e84f4.firebaseapp.com",
  projectId: "emajhon-e84f4",
  storageBucket: "emajhon-e84f4.appspot.com",
  messagingSenderId: "581550943363",
  appId: "1:581550943363:web:073ae6ad4d6a75b1767fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;