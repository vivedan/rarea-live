// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeyEKYI8NrGTSyRm2odCNbc2gVlQRsoT0",
  authDomain: "testreact-eac3e.firebaseapp.com",
  projectId: "testreact-eac3e",
  storageBucket: "testreact-eac3e.appspot.com",
  messagingSenderId: "785181155902",
  appId: "1:785181155902:web:59897db6ef194118bde76f",
  measurementId: "G-4T5SDFE0QQ",
  databaseURL: "https://testreact-eac3e-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const storage = firebase.storage();
//const analytics = getAnalytics(app);

//export {storage};
export default firebase;