import React, { useContext, useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import AuthContext from "../../config/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        authCtx.logout();
      })
      .catch((error) => {
        console.error(error);
        // An error happened.
      });
  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="7"
                height="4"
                rx="2"
                fill="#000"
                stroke="#000"
                strokeWidth="1.5"
              />
              <rect
                x="1"
                y="8.00024"
                width="7"
                height="10"
                rx="2.5"
                fill="#000"
                stroke="#000"
                strokeWidth="1.5"
              />
              <rect
                x="10.9998"
                y="1"
                width="7"
                height="10"
                rx="2.5"
                fill="#000"
                stroke="#000"
                strokeWidth="1.5"
              />
              <rect
                x="10.9998"
                y="14"
                width="7"
                height="4"
                rx="2"
                fill="#000"
                stroke="#000"
                strokeWidth="1.5"
              />
            </svg>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h1 className={styles.logoText}>Daily Planner</h1>
            </Link>
          </div>
          <div className={styles.navLinks}>
            <div className={styles.links}>
              {["Features", "Task", "Calendar"].map((el, index) => {
                return (
                  <div key={`${Date.now()}-${index}-${el}`}>
                    <h1 className={styles.menuLink}>{el}</h1>
                  </div>
                );
              })}
            </div>
            <div className={styles.authentificationDiv}>
              {!authCtx.isLogged && (
                <Link
                  to="login"
                  style={{ textDecoration: "none" }}
                  className={styles.loginButton}
                >
                  Login
                </Link>
              )}
              {!authCtx.isLogged && (
                <Link
                  to="register"
                  style={{ textDecoration: "none" }}
                  className={styles.registerButton}
                >
                  Register
                </Link>
              )}
              {authCtx.isLogged && (
                <div
                  style={{ textDecoration: "none" }}
                  className={styles.loginButton}
                >
                  {auth.currentUser.displayName}
                </div>
              )}
              {authCtx.isLogged && (
                <div
                  onClick={signOutHandler}
                  style={{ textDecoration: "none" }}
                  className={styles.registerButton}
                >
                  Logout
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
