
import {
    FaBars,
  FaBook,
  FaEnvelope,
  FaFileContract,
  FaHistory,
  FaHome,
  FaShoppingCart,
  FaTasks,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin()
   
  return (
    <div className="grid p-5 gap-10 justify-evenly grid-cols-12 max-w-screen-2xl mx-auto">
      <div className="bg-success rounded-lg p-10 col-span-3 min-h-screen">
      
        <ul className="flex flex-col gap-4">
          {
            isAdmin ? 
            <>
          <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/adminHome"
            >
              <FaHome />
              Admin Home
            </NavLink>  
          </li>
          <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/cart"
            >
              <FaShoppingCart/>
               My Cart 
            </NavLink>  
          </li>
          <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/additems"
            >
              <FaUtensils />
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/paymentHistory"
            >
              <FaHistory />
               Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex uppercase text-xl gap-2 items-center"
              to="/DashBoard/manageitems"
            >
              <FaTasks />
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex uppercase text-xl gap-2 items-center"
              to="/DashBoard/managebook"
            >
              <FaBook />
              Manage Book
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex  uppercase text-xl gap-2 items-center"
              to="/DashBoard/allusers"
            >
              <FaUser />
              All User
            </NavLink>
          </li>
            </> : 
            <>
                 <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/userHome"
            >
              <FaHome />
              User Home
            </NavLink>  
          </li>
                 <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/adminhome"
            >
              <FaHome />
              Admin Home
            </NavLink>  
          </li>
          <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/paymentHistory"
            >
              <FaHistory />
               Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/additems"
            >
              <FaUtensils />
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex uppercase text-xl gap-2 items-center"
              to="/DashBoard/manageitems"
            >
              <FaTasks />
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex uppercase text-xl gap-2 items-center"
              to="/DashBoard/managebook"
            >
              <FaBook />
              Manage Book
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex  uppercase text-xl gap-2 items-center"
              to="/DashBoard/allusers"
            >
              <FaUser />
              All User
            </NavLink>
          </li>
            </>
          }
        </ul>

        <div className="border-b mt-10"></div>

        <ul className="mt-10 flex flex-col gap-3">
          <NavLink
            className="flex text-xl gap-2 items-center uppercase"
            to="/"
          >
            <FaHome />
            Home
          </NavLink>
          <NavLink
            className="flex text-xl gap-2 items-center uppercase"
            to="/DashBoard/cart"
          >
            <FaBars />
            Menu
          </NavLink>
          <NavLink
            className="flex text-xl gap-2 items-center uppercase"
            to="/DashBoard/cart"
          >
            <FaShoppingCart />
            shop
          </NavLink>
          <NavLink
            className="flex text-xl gap-2 items-center uppercase"
            to="/DashBoard/cart"
          >
            <FaEnvelope /> 
             contact
          </NavLink>
        </ul>
      </div>
      <div className="col-span-8   rounded-lg w-full bg-opacity-40 bg-gray-400 justify-center flex ">
       
        <Outlet />
      </div>
    </div>
  );
};
export default DashBoard;
