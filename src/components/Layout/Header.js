import React from "react";
import styles from "./header.module.css";

const Header = () => {
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
            <h1 className={styles.logoText}>Daily Planner</h1>
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
              <div className={styles.loginButton}>Login</div>
              <div className={styles.registerButton}>Register</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
