// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYxWYF0Ctin8j1jVLEcjMJgfVChPz3YfQ",
  authDomain: "movie-app-a2aba.firebaseapp.com",
  projectId: "movie-app-a2aba",
  storageBucket: "movie-app-a2aba.appspot.com",
  messagingSenderId: "166119115358",
  appId: "1:166119115358:web:c4eb8f78f58feddf6542cf",
  measurementId: "G-47HFFCYYPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
