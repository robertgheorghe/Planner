import React, { useContext, useState } from "react";
import classes from "./LoginPage.module.css";
import { auth } from "../../config/firebase";
import { Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../../config/auth-context";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectLogin, setRedirectLogin] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
    setRedirectLogin(true);
    authCtx.signIn();
  };

  return (
    <div className={classes.loginFormContainer}>
      <div className={classes.loginForm}>
        <h2>Login</h2>
        <form>
          <input
            className={classes.inputField}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={classes.inputField}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className={classes.submitButton}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      {redirectLogin && <Navigate to="/" />}
    </div>
  );
};

export default LoginPage;
