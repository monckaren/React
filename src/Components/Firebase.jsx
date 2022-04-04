
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDhVjvt2OUiEfByTZwV3dA8qgalsby8y70",
  authDomain: "react-coder-24911.firebaseapp.com",
  projectId: "react-coder-24911",
  storageBucket: "react-coder-24911.appspot.com",
  messagingSenderId: "1008200142650",
  appId: "1:1008200142650:web:b1570c9abc101a0e458a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
