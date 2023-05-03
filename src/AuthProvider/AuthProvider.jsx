import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

//! Create context
export const AuthContext = createContext(null);
//todo: Auth;
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  //!create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //!logIn User
  const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const authInfo = {
    user,
    createUser,
    setUser,
    loginUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
