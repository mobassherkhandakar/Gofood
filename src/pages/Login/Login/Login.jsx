import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import loginLogo from "../../../assets/107385-login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth(app)
const Login = () => {
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const { loginUser, setUser } = useContext(AuthContext);

  //!HandleGoogle function
  const handleGoogle = () =>{
    signInWithPopup(auth, googleProvider)
    .then(rusult =>{
      const user = rusult.user;
      setUser(user)
      navigate(from, { replace: true })
    })
    .catch(error=>{
      setError(error.message)
    })
  }
  const handleGitHub = () =>{
    signInWithPopup(auth, githubProvider)
    .then(rusult =>{
      const user = rusult.user;
      setUser(user)
      navigate(from, { replace: true })
    })
    .catch(error=>{
      setError(error.message)
    })
  }


  //!handleSubmit fuction
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      e.target.email.focus();
      return;
    } else if (passwordError) {
      e.target.password.focus();
      return;
    }
    loginUser(email, password)
    .then(rusult=> {
      const loginUser = rusult.user;
      console.log(loginUser);
      navigate(from, { replace: true })
    })
    .catch(error=> {
      setError(error.message);
    })
  };

  const handlePassword = e =>{
    const passwordInput = e.target.value;
    setPassword(passwordInput)
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  }

  const handleEmail= e=>{
    const emailInput = e.target.value;
    setEmail(emailInput)
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  }
console.log(email, password);
  return (
    <div className="grid grid-cols-1 justify-evenly md:grid-cols-1 lg:grid-cols-2 items-center">
      <div className="login">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-md">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
              Log in to your account
            </h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Email"
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  type="password"
                  placeholder="Password"
                />
                {passwordError && <span className="error">{passwordError}</span>}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
                
                
              </div>
              {error && <span className="error">{error}</span>}
            </form>
            <div className="text-center mb-4">
              <span className="text-gray-600 font-medium">Or sign in with</span>
            </div>
            <div className="flex justify-center">
              <button onClick={handleGoogle} className="bg-red-600 flex items-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-4">
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button onClick={handleGitHub} className="bg-gray-800 flex items-center hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-600 font-medium">
                Don't have an account?
              </span>
              <Link
                to="/registar"
                className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
              >
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="logo my-container">
        <Player
          autoplay
          loop
          src={loginLogo}
          style={{ height: "100%", width: "100%" }}
        ></Player>
      </div>
    </div>
  );
};

export default Login;
