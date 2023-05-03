import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const {user, loading} = useContext(AuthContext)
  
  if(loading){
    return <Spinner/>
}

if(user){
  return children;
}
return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;
