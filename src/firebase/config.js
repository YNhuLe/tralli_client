// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVR6CVrfGrHm8fQwyBQ_p78cnx8POOaLg",
  authDomain: "tralli-e705d.firebaseapp.com",
  projectId: "tralli-e705d",
  storageBucket: "tralli-e705d.firebasestorage.app",
  messagingSenderId: "645341817593",
  appId: "1:645341817593:web:3d35b1466911fe76a3d028",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
