// // 
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// // Firebase configuration and initialization
// const firebaseConfig = {
//   apiKey: "AIzaSyA4ycvyocW71CsKDPK_TJWncpiQhtXqsRU",
//   authDomain: "formauth-a6604.firebaseapp.com",
//   projectId: "formauth-a6604",
//   storageBucket: "formauth-a6604.firebasestorage.app",
//   messagingSenderId: "12803101153",
//   appId: "1:12803101153:web:7d3d29a14e922ee2c442a0"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Registration function
// async function register(email, password) {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     await setDoc(doc(db, "users", userCredential.user.uid), {
//       email: userCredential.user.email,
//       uid: userCredential.user.uid,
//       createdAt: new Date()
//     });
//     alert("User registered successfully!Please Sign in to continue....");
//   } catch (error) {
//     console.error("Registration error:", error);
//     alert(error.message);
//   }
// }

// // Sign-in function
// async function signIn(email, password) {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     alert("Sign in successful!");
//     window.location.href='./profile.html';
//   } catch (error) {
//     console.error("Sign-in error:", error);
//     alert(error.message);
//   }

// }

// // Event listeners for form submission
// document.getElementById("btn1").addEventListener("click", (e) => {
//   e.preventDefault();
//   register(document.getElementById("remail").value, document.getElementById("rpassword").value);
// });

// document.getElementById("btn2").addEventListener("click", (e) => {
//   e.preventDefault();
//   signIn(document.getElementById("email").value, document.getElementById("password").value);
// });
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
    
    // Storing user data in Firestore after successful registration
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: userCredential.user.email,
      uid: userCredential.user.uid,
      createdAt: new Date()
    });

    // Save user data in localStorage for session management
    localStorage.setItem("user", JSON.stringify({
      email: userCredential.user.email,
      uid: userCredential.user.uid,
    }));

    alert("User registered successfully! Please Sign in to continue....");

    // Optionally redirect to sign-in page
    // window.location.href = './login.html';
    
  } catch (error) {
    console.error("Registration error:", error);
    alert(error.message);
  }
}

// Sign-in function
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data in localStorage after sign-in
    localStorage.setItem("user", JSON.stringify({
      email: user.email,
      uid: user.uid,
    }));

    alert("Sign in successful!");
    window.location.href = './index.html'; // Redirect to profile after successful login
    
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
