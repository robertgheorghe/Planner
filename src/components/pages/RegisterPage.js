import React, { useState } from "react";
import classes from "./RegisterPage.module.css";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ user });
    } catch (err) {
      console.error(err);
    }
    updateProfile(auth.currentUser, {
      displayName: userName,
    });

    <Navigate replace to="/" />;
  };

  return (
    <div className={classes.registerFormContainer}>
      <div className={classes.registerForm}>
        <h2>Register</h2>
        <input
          className={classes.inputField}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={classes.inputField}
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={classes.inputField}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={classes.submitButton} onClick={handleRegister}>
          Login
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
