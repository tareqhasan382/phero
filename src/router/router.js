import { createBrowserRouter } from "react-router-dom";
import About from "../component/About";
import Add from "../component/dashboard/Add";
import DashBoard from "../component/dashboard/DashBoard";
import Home from "../component/Home";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../login/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <About></About>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
  },
  {
    path: "add",
    element: <PrivateRoute><Add></Add></PrivateRoute>,
  },
]);

export default router;
