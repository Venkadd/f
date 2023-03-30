// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHHl0eCwEFp0osIV7SdSflovB0GZslbkI",
  authDomain: "video-15124.firebaseapp.com",
  projectId: "video-15124",
  storageBucket: "video-15124.appspot.com",
  messagingSenderId: "900687223379",
  appId: "1:900687223379:web:4def1c43881eccfd3904a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

export const auth = getAuth();
export default app