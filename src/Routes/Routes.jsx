import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import Products from "../Pages/Products";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashBoard from "../Dashboard/DashBoard";
import AllUsers from "../Layout/AllUsers";
import Details from "../Layout/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "details/:id",
        loader : ({params}) => fetch(`http://localhost:2000/watch/${params.id}`),
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
       
      },
    ],
  },
  //   dash layout part
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);
export default router;
