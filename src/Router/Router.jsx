import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import ThankYou from "../pages/ThankYou/ThankYou";
import ChafeDeteils from "../pages/ChafeDeteils/ChafeDeteils";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "chafe/:id",
        element: (
          <PrivateRoute>
            <ChafeDeteils />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-mobassherkhandakar.vercel.app/chafe/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/registar",
        element: <Register />,
      },
      {
        path: "/thankyou",
        element: <ThankYou />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
