import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

//! Create context
export const AuthContext = createContext(null)
//todo: Auth;
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const user = null

  const authInfo ={
    user,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;