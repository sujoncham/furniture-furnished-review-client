// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPkdc-nvH72acYiYa2H9RL6cA0m2AnF5k",
  authDomain: "furniture-furnished-review.firebaseapp.com",
  projectId: "furniture-furnished-review",
  storageBucket: "furniture-furnished-review.appspot.com",
  messagingSenderId: "997948177461",
  appId: "1:997948177461:web:3560a01139a4ce97d1c57c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;