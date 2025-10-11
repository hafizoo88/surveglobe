import React, { useState } from "react";
import SurveyForm from "../firebase/SurveyForm";
import ViewResponses from "./ViewResponses";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to SurveGlobe</h1>

      {!user ? (
        <button onClick={handleLogin}>Login with Google</button>
      ) : (
        <>
          <p>Logged in as: <strong>{user.displayName}</strong></p>
          <button onClick={handleLogout}>Logout</button>

          <h2>Submit Your Survey</h2>
          <SurveyForm />

          <hr style={{ margin: "2rem 0" }} />

          <h2>View Submitted Responses</h2>
          <ViewResponses />
        </>
      )}
    </div>
  );
}

export default App;
