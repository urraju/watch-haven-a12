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
import MyProducts from "../userDashboard/MyProducts";
import PostContent from "../Dashboard/PostContent";
import NotFound from "../Error/NotFound";
import Subscription from "../userDashboard/Subscription";
import MyProfile from "../userDashboard/MyProfile";
import AdminHome from "../Dashboard/AdminHome";
import UpdateProduct from "../userDashboard/UpdateProduct";
import ManageCoupn from "../Dashboard/ManageCoupn";
import CreateCoupon from "../Dashboard/CreateCoupon";
import PostProductDetails from "../Dashboard/PostProductDetails";
import DashBoardDisplay from "../Dashboard/DashBoardDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "features",
        element: <Features />,
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
        loader: ({ params }) =>
          fetch(`https://assignmant-12-server.vercel.app/watch/${params.id}`),
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
        path: "reviewContent",
        element: <ReviewContent />,
      },
      {
        path: "dashboardDisplay",
        element: <DashBoardDisplay />,
      },
      {
        path: "reportContent",
        element: <ReportContent />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "myProducts",
        element: <MyProducts />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },

      {
        path: "postContent",
        element: <PostContent />,
      },
      {
        path: "postProductDetails/:id",
        element: <PostProductDetails />,
        loader: ({ params }) =>
          fetch(`https://assignmant-12-server.vercel.app/postProduct/${params.id}`),
      },
      {
        path: "editProduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`https://assignmant-12-server.vercel.app/postProduct/${params.id}`),
      },
      {
        path: "manageCoupon",
        element: <ManageCoupn />,
      },
      {
        path: "createCoupon/:id",
        element: <CreateCoupon />,
        loader: ({ params }) =>
          fetch(`https://assignmant-12-server.vercel.app/coupon/${params.id}`),
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
