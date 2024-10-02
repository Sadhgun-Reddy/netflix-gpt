// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpZMosPssrmAdT3jrRL-2pxewrobUqN3k",
  authDomain: "netflix-gpt-aac0c.firebaseapp.com",
  projectId: "netflix-gpt-aac0c",
  storageBucket: "netflix-gpt-aac0c.appspot.com",
  messagingSenderId: "277773673466",
  appId: "1:277773673466:web:2b53a1bcbb492dffee7a43",
  measurementId: "G-7N3H3RLT5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();