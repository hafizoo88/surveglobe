import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV901z4u9ZWTkD4EQDOMibdhuq-WM9yMU",
  authDomain: "surveglobe.firebaseapp.com",
  projectId: "surveglobe",
  storageBucket: "surveglobe.firebasestorage.app",
  messagingSenderId: "576281616925",
  appId: "1:576281616925:web:4ea22325be28e77d765cf4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    document.getElementById("userInfo").innerText = `Welcome, ${user.displayName}`;
    console.log("Logged in user:", user);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
});
