import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  
  getAuth,
  
  createUserWithEmailAndPassword,
  
  signInWithEmailAndPassword,
  
  onAuthStateChanged
  
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv_PDDOFiF1hEkvXTtyOUoeq_2dVRBPCg",
  authDomain: "lumet-1.firebaseapp.com",
  projectId: "lumet-1",
  storageBucket: "lumet-1.firebasestorage.app",
  messagingSenderId: "869624501683",
  appId: "1:869624501683:web:e3c90ed3d0535c08ada7c6",
  measurementId: "G-3E9RZCLBQ0"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  
  auth,
  
  createUserWithEmailAndPassword,
  
  signInWithEmailAndPassword,
  
  onAuthStateChanged
  
};