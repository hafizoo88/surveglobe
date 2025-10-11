import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login"); // ya home page
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
