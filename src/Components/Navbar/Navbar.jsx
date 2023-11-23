import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import useAuth from "../../AuthContext/useAuth/useAuth";
import logo from '../../assets/logo.png'
import DarkMode from "../DarkMode/DarkMode";
import userIcon from '../../assets/user/user.png'
 
const Navbar = () => {
  const { user, singout } = useAuth();
 
  
  const handleLogout = () => {
    singout().then().catch();
  };
  const navbar = (
    <>
    {/* {
      user && isAdmin &&  <NavLink
      className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
      to="/dashboard/adminHome"
    >
      Admin Home
    </NavLink>
    }
    { user && !isAdmin &&  <NavLink
      className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
      to="/dashboard/userHome"
    >
      User Home
    </NavLink>

    }
      <NavLink to="/dashboard/allusers">
        <button className="flex gap-2 uppercase text-success">
          <FaCartArrowDown className="text-xl"/>
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </NavLink> */}

      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/"
      >
        Home
      </NavLink>
      
      {/* <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/dashboard"
      >
        DashBoard
      </NavLink> */}
      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/ourmenu"
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/ourshop"
      >
        DashBoard
      </NavLink>
    </>
  );

  return (
  <div className="">
      <div className=" lg:w-9/12  mx-auto  top-0  md:px-0">
     
     <div className="navbar lg:w-9/12  fixed bg-black/30 px-5   py-3 rounded-full  backdrop-blur text-white z-30">
       <div className="navbar-start">
         <div className="dropdown">
           <label
             tabIndex={0}
             className="btn text-rose-500 btn-ghost   lg:hidden"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-7 w-7"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M4 6h16M4 12h8m-8 6h16"
               />
             </svg>
           </label>
           <ul
             tabIndex={0}
             className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-gradient-to-t to-violet-700 from-black w-52 rounded border border-gradient-to-tr  border-gray-600 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
           >
             {navbar}
           </ul>
         </div>
         <NavLink to="/" className="  ">
           <div className="flex items-center">
             <img
               className="w-24 hidden lg:block  "
               src={logo}
               alt=""
             />
             <p className=" md:text-2xl  md:block   first-letter:text-3xl first-letter:text-yellow-400 font-philospar lg:hidden block font-bold uppercase font-bebas text-white">
              Watch
             </p>
           </div>
         </NavLink>
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1  text-[14px] font-normal uppercase font-roboto gap-5 text-white ">
           {navbar}
         </ul>
       </div>

       <div className="navbar-end flex gap-2 items-center">
        
        

         {user ? (
           <button
             onClick={handleLogout}
             className="text-white font-philospar uppercase bg-yellow-500 text-[12px] md:py-1 md:text-[16px] px-4  rounded py-[3px]"
           >
             Sing out
           </button>
         ) : (
           <Link to="/login">
             <button className="text-white md:py-1 text-[13px] uppercase font-philospar bg-yellow-500 px-5 md:text-[16px] rounded py-[3px]">
               Login
             </button>
           </Link>
         )}

<div className="dropdown dropdown-end">
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img className="border border-yellow-500 rounded-full" src={user ? user.photoURL : userIcon} alt="" />
             </div>
           </label>

           <ul
             tabIndex={0}
             className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-black text-white  w-56 rounded-lg"
           >
             <li>{user ? user.displayName : ""}</li>
             <li>{user ? user.email : ""}</li>
           </ul>
         </div>
         <div>
           <DarkMode/>
         </div>
     </div>
   </div>
 </div>
  </div>
  );
};
export default Navbar;
