
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
import useAuth from "../AuthContext/useAuth/useAuth";
import useAdmin2 from "../hooks/useAdmin2";
import useModerator from "../hooks/useModerator";

const DashBoard = () => {
  const {user} = useAuth()
  const [isModerator] = useModerator()
  const [isAdmin] = useAdmin2()
  // const [isAdmin , setIsAdmin] = useState(false)
  // console.log(isAdmin);
  // console.log(localStorage.getItem('access-token'));
  // useEffect(() => {
  //  if(user?.email){
  //   fetch(`http://localhost:2000/users/admin/${user?.email}`,{
  //     method : 'GET',
  //     headers : {
  //       authorization : `Bearer ${localStorage.getItem('access-token')}`
  //     }
  //   })
  //   .then(res => res.json())
  //    .then(data =>  setIsAdmin(data.admin))
  //  }
  // },[user?.email])
   
  return (
    <div className="grid p-5 gap-10 justify-evenly grid-cols-12 max-w-screen-2xl mx-auto">
      <div className="bg-success rounded-lg p-10 col-span-3 min-h-screen">
      
        <ul className="flex flex-col gap-4">
          {isModerator ? <NavLink>Moderator Home</NavLink> : ''}
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
                 {/* <li>
            <NavLink
              className="flex text-xl gap-2 items-center uppercase"
              to="/DashBoard/adminhome"
            >
              <FaHome />
              Admin Home
            </NavLink>  
          </li> */}
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
