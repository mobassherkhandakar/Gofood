import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from "../../../../public/Gofood-logo.png"
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../../../components/Spinner";

const Header = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Spinner />;
  }
  const { user, singOutHandler } = useContext(AuthContext);
  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar bg-base-100 my-container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="bg-white">
            <img className="w-32 bg-white" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>

            {user ? (
              <div className="ps-2  dropdown dropdown-bottom">
                <label
                  tabIndex={0}
                  className="btn btn-accent btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    
                    {user ? <img title={user?.displayName} src={user?.photoURL } /> : "login"}
                    {/* <img title={user?.displayName && user?.displayName}
                      src={
                        user?.photoURL ? user?.photoURL : "https://ionicframework.com/docs/img/demos/avatar.svg"
                      }
                    /> */}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-auto"
                >
                  <li>
                    <button onClick={singOutHandler} className="capitalize">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active " : "default"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <label
                  tabIndex={0}
                  className="btn btn-accent btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4JTsw2gOIRwGUnbpZjNjizIzVl6vkBfXqxdR6e93nA&s" />
                  </div>
                </label>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active " : "default")}
              >
                <button className="btn capitalize btn-primary">Login</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
