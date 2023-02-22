import {getFirestore} from "firebase/firestore";
import {getApp, getApps, initializeApp} from "firebase/app";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR4ZIYj-LU0CpM6VWI0K5ydOvImcAWbSg",
  authDomain: "chatgptclone-b7fdc.firebaseapp.com",
  projectId: "chatgptclone-b7fdc",
  storageBucket: "chatgptclone-b7fdc.appspot.com",
  messagingSenderId: "151359939840",
  appId: "1:151359939840:web:b2e46aae41570e826bffe5",
  measurementId: "G-1E4W1L23N2"
};

// Initialize Firebase
const app = getApps.length? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};