import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Chef from "../pages/Home/Chef/Chef";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "news",
        element: <PrivateRoute><Chef/></PrivateRoute>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "/registar",
        element: <Register/>
      }
    ]
  }
])

