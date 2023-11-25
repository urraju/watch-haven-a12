import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import Products from "../Pages/Products";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashBoard from "../Dashboard/DashBoard";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import AllUsers from "../Layout/AllUsers";

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
    children : [
        {
            path : 'allusers',
            element : <AdminRoute>
                <AllUsers/>
            </AdminRoute>
        }
    ]
  },
]);
export default router;
