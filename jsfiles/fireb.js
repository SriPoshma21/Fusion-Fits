// 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "AIzaSyA4ycvyocW71CsKDPK_TJWncpiQhtXqsRU",
  authDomain: "formauth-a6604.firebaseapp.com",
  projectId: "formauth-a6604",
  storageBucket: "formauth-a6604.firebasestorage.app",
  messagingSenderId: "12803101153",
  appId: "1:12803101153:web:7d3d29a14e922ee2c442a0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Registration function
async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: userCredential.user.email,
      uid: userCredential.user.uid,
      createdAt: new Date()
    });
    alert("User registered successfully!");
  } catch (error) {
    console.error("Registration error:", error);
    alert(error.message);
  }
}

// Sign-in function
async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Sign in successful!");
    window.location.href='./main.html';
  } catch (error) {
    console.error("Sign-in error:", error);
    alert(error.message);
  }

}

// Event listeners for form submission
document.getElementById("btn1").addEventListener("click", (e) => {
  e.preventDefault();
  register(document.getElementById("remail").value, document.getElementById("rpassword").value);
});

document.getElementById("btn2").addEventListener("click", (e) => {
  e.preventDefault();
  signIn(document.getElementById("email").value, document.getElementById("password").value);
});