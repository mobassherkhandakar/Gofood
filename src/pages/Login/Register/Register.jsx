import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import regesterLogo from "../../../assets/118046-lf20-oahmox5rjson.json";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Register = () => {
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
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="Name"
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
                  placeholder="Photo"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Registar
                </button>
              </div>
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
        >
          
        </Player>
      </div>
    </div>
  );
};

export default Register;