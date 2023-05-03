import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import loginLogo from "../../../assets/107385-login.json";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Login = () => {
  return (
    <div className="grid grid-cols-1 justify-evenly md:grid-cols-1 lg:grid-cols-2 items-center">
      <div className="login">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-md">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
              Log in to your account
            </h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                  type="email"
                  placeholder="Email"
                />
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
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log In
                </button>
                <div>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
            <div className="text-center mb-4">
              <span className="text-gray-600 font-medium">Or sign in with</span>
            </div>
            <div className="flex justify-center">
              <button className="bg-red-600 flex items-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-4">
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button className="bg-gray-800 flex items-center hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
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
        >
          
        </Player>
      </div>
    </div>
  );
};

export default Login;
