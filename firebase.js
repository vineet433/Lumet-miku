// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔥 YOUR FIREBASE CONFIG (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyAv_PDDOFiF1hEkvXTtyOUoeq_2dVRBPCg",
  authDomain: "lumet-1.firebaseapp.com",
  projectId: "lumet-1",
  storageBucket: "lumet-1.firebasestorage.app",
  messagingSenderId: "869624501683",
  appId: "1:869624501683:web:e3c90ed3d0535c08ada7c6",
  measurementId: "G-3E9RZCLBQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// =====================
// SIGN UP
// =====================
window.signupUser = function() {
  
  let email = document.querySelector("#signupPopup input[type='email']").value;
  let password = document.querySelector("#signupPopup input[type='password']").value;
  let name = document.getElementById("signupName").value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      
      alert("Signup Successful!");
      
      // show profile icon
      document.getElementById("profileCircle").style.display = "flex";
      document.getElementById("profileCircle").innerText = name.charAt(0).toUpperCase();
      
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("signupBtn").style.display = "none";
      
      document.getElementById("signupPopup").style.display = "none";
      
    })
    .catch((error) => {
      alert(error.message);
    });
};

// =====================
// LOGIN
// =====================
window.loginUser = function() {
  
  let email = document.querySelector("#loginPopup input[type='email']").value;
  let password = document.querySelector("#loginPopup input[type='password']").value;
  let name = document.getElementById("loginName").value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      
      alert("Login Successful!");
      
      document.getElementById("profileCircle").style.display = "flex";
      document.getElementById("profileCircle").innerText = name.charAt(0).toUpperCase();
      
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("signupBtn").style.display = "none";
      
      document.getElementById("loginPopup").style.display = "none";
      
    })
    .catch((error) => {
      alert(error.message);
    });
};

// =====================
// LOGOUT (optional)
// =====================
window.logoutUser = function() {
  signOut(auth);
};

// =====================
// CHECK LOGIN STATE
// =====================
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("No user logged in");
  }
});