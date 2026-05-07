
  // 🔥 Your Firebase config (replace with yours)
  const firebaseConfig = {
    apiKey: "AIzaSyAqO5Or9Wla7AoMSOStGmRUarye8x12ay0",
  authDomain: "lumet-e3c66.firebaseapp.com",
  projectId: "lumet-e3c66",
  storageBucket: "lumet-e3c66.firebasestorage.app",
  messagingSenderId: "939922811683",
  appId: "1:939922811683:web:fc792bce189199a5c4fa96",
  measurementId: "G-2C00XQ1Q0F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // 👇 SIGN UP FUNCTION
  window.signUpUser = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("Account created successfully!");
      console.log("User:", user);

      // Optional: redirect
      window.location.href = "dashboard.html";

    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };
</script>