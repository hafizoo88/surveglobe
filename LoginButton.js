import { signInWithGoogle } from "./auth";

function LoginButton() {
  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}

export default LoginButton;
