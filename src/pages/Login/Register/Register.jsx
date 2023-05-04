import React, { useContext, useState } from "react";
import regesterLogo from "../../../assets/118046-lf20-oahmox5rjson.json";
import { Link, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import {  updateProfile } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Register = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const navigate = useNavigate();
  // const location = useLocation();

  //!handleSubmit fuction
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    // console.log(photo, name);
    if (emailError) {
      e.target.email.focus();
      return;
    } else if (passwordError) {
      e.target.password.focus();
      return;
    }
    createUser(email, password)
      .then((rusult) => {
        const loginUser = rusult.user;
        console.log(loginUser);
        updateData(rusult.user, name, photo);
        navigate("/thankyou");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="grid grid-cols-1 justify-evenly md:grid-cols-1 lg:grid-cols-2 items-center">
      <div className="login">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-md">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
              Registar to your account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="Name"
                  name="name"
                  required
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  name="email"
                  required
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
                  value={password}
                  onChange={handlePassword}
                  name="password"
                  required
                  type="password"
                  placeholder="Password"
                />
                {passwordError && (
                  <span className="error">{passwordError}</span>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registar
                </button>
              </div>
              {error && <span className="error">{error}</span>}
            </form>
            {/* <div className="text-center mb-4">
              <span className="text-gray-600 font-medium">Or sign in with</span>
            </div> */}

            <div className="text-center mt-4">
              <span className="text-gray-600 font-medium">
                Alradey have a an account?
              </span>
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
              >
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="logo my-container">
        <Player
          autoplay
          loop
          src={regesterLogo}
          style={{ height: "100%", width: "100%" }}
        ></Player>
      </div>
    </div>
  );
};

export default Register;
