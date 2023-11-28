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
import AdminRoute from "../AdminRoutes/AdminRoutes";
import ReviewContent from "../Dashboard/ReviewContent";
import ReportContent from "../Dashboard/ReportContent";
import Features from "../Components/Features/Features";
import AddProduct from "../userDashboard/AddProduct";
import TrendingProduct from "../Components/TrendingProduct/TrendingProduct";
import MyProducts from "../userDashboard/MyProducts";
import PostContent from "../Dashboard/PostContent";
import UserProfile from "../userDashboard/UserProfile";
 

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
        path: "features",
        element: <Features />,
      },
      // {
      //   path: "trandingProduct",
      //   element: <TrendingProduct />,
      // },
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
        loader: ({ params }) =>
          fetch(`http://localhost:2000/watch/${params.id}`),
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
        path : 'reviewContent',
        element : <ReviewContent/>
      },
      {
        path : 'reportContent',
        element : <ReportContent/>
      },
      {
        path : 'addProduct',
        element : <AddProduct/>
      },
      {
        path : 'myProducts',
        element : <MyProducts/>
      },
      {
        path : 'userProfile',
        element : <UserProfile/>
      },
      
      {
        path : 'postContent',
        element : <PostContent/>
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers />,
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
