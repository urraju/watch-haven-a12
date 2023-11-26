import {
  FaAddressCard,
  FaBars,
  FaBook,
  FaEnvelope,
  FaFileContract,
  FaHistory,
  FaHome,
  FaProcedures,
  FaShoppingCart,
  FaTasks,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAdmin2 from "../hooks/useAdmin2";
import useModerator from "../hooks/useModerator";
import { MdHome, MdReport, MdReportProblem, MdStars } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const DashBoard = () => {
  const { user } = useAuth();
  const [isModerator] = useModerator();
  const [isAdmin] = useAdmin2();
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
    <div className="grid w-full p-5 gap-10 justify-evenly  lg:grid-cols-12 max-w-screen-2xl mx-auto">
      <div className="bg-gradient-to-bl to-yellow- from-yellow-700 rounded-lg p-10 col-span-4 min-h-screen">
        <div>
          <div className="flex gap-3 items-center mb-5 ">
            <div className="border rounded-full p-2">
              <img className="rounded-full w-20" src={user.photoURL} alt="" />
            </div>
            <div>
              <p className="text-lg font-kdam text-yellow-900">{user.displayName}</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div> 
          
        <ul className="flex flex-col gap-4">
          {isAdmin  || isModerator  ? (
            <>
              <li>
                <NavLink
                  className="flex font-roboto gap-2 items-center uppercase"
                  to="/DashBoard/adminHome"
                >
                  <AiFillHome className="text-lg" />
                  {isAdmin ? ' Admin Home' : isModerator ? 'Moderator Home' : ''}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex  gap-2 items-center uppercase"
                  to="/DashBoard/reviewContent"
                >
                  <MdStars/>
                  Review Content
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex font-roboto  gap-2 items-center uppercase"
                  to="/DashBoard/reportContent"
                >
                  <MdReportProblem className="text-xl" />
                  Report Content
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  className="flex  uppercase font-roboto gap-2 items-center"
                  to="/DashBoard/allusers"
                >
                  <FaUsers className="text-lg" />
                  All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className="flex font-roboto   gap-2 items-center uppercase"
                  to="/DashBoard/myProfile"
                >
                  <FaUser className="text-lg" />
                   My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex font-roboto   gap-2 items-center uppercase"
                  to="/DashBoard/myProduct"
                >
                  <FaBars />
                  My Product
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="flex font-roboto  gap-2 items-center uppercase"
                  to="/DashBoard/addProduct"
                >
                  <FaShoppingCart className="text-lg"/>
                  Add Product
                </NavLink>
              </li>
 
            </>
          )}
        </ul>

        <div className="border-b mt-5"></div>

        <ul className="mt-4 flex flex-col gap-3">
          <NavLink className="flex font-roboto  gap-2 items-center uppercase" to="/">
            <MdHome className="text-xl" />
            Home
          </NavLink>
          <NavLink
            className="flex font-roboto  gap-2 items-center uppercase"
            to="/DashBoard/cart"
          >
            <FaBars className="text-lg" />
            Menu
          </NavLink>
          <NavLink
            className="flex font-roboto  gap-2 items-center uppercase"
            to="/DashBoard/cart"
          >
            <FaShoppingCart className="text-lg" />
            shop
          </NavLink>
          <NavLink
            className="flex font-roboto  gap-2 items-center uppercase"
            to="/DashBoard/cart"
          >
            <FaEnvelope className="text-lg" />
            contact
          </NavLink>
        </ul>
      </div>
      <div className=" lg:col-span-8  rounded-lg w-full bg-opacity-20 bg-gradient-to-tl from-yellow-500 justify-center flex ">
        <Outlet />
      </div>
    </div>
  );
};
export default DashBoard;
