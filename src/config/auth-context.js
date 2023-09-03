import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";

const AuthContext = React.createContext({
  isLogged: false,
  signIn: () => {},
  logout: () => {},
  email: "",
  userName: "",
});

export const AuthContextProvider = (props) => {
  const [userIsLoggednIn, setUserIsLoggedIn] = useState(false);
  const email = auth.currentUser ? auth.currentUser.email : "";
  const userName = auth.currentUser ? auth.currentUser.displayName : "";

  const signIn = () => {
    setUserIsLoggedIn(true);
  };
  const logout = () => {
    setUserIsLoggedIn(false);
  };
  const contextValue = {
    isLogged: userIsLoggednIn,
    signIn: signIn,
    logout: logout,
    email: email,
    userName: userName,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
