// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPjxhk4QU0pphatZeFxh4JwmZ7Qmt857U",
    authDomain: "job-task-2-adfc4.firebaseapp.com",
    projectId: "job-task-2-adfc4",
    storageBucket: "job-task-2-adfc4.appspot.com",
    messagingSenderId: "688517074815",
    appId: "1:688517074815:web:4752d36069a06abd29144a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth