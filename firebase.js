import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqO5Or9Wla7AoMSOStGmRUarye8x12ay0",
  authDomain: "lumet-e3c66.firebaseapp.com",
  projectId: "lumet-e3c66",
  storageBucket: "lumet-e3c66.firebasestorage.app",
  messagingSenderId: "939922811683",
  appId: "1:939922811683:web:fc792bce189199a5c4fa96",
  measurementId: "G-2C00XQ1Q0F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
};