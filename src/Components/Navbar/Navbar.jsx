import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaCartArrowDown } from "react-icons/fa";
import useAuth from "../../AuthContext/useAuth/useAuth";
import logo from '../../assets/banner/logo.png'
import DarkMode from "../DarkMode/DarkMode";
import userIcon from '../../assets/user/user.png'
import { useEffect, useState } from "react";
 
const Navbar = () => {
  const [loading , setLoading] = useState(false)
  const { user, singout } = useAuth();
  const navigate = useNavigate()
  
  const [isAdmin , setIsAdmin] = useState(false)
  console.log(localStorage.getItem('access-token'));
  useEffect(() => {
   if(user?.email && localStorage.getItem('access-token')){
    fetch(`https://assignmant-12-server.vercel.app/users/admin/${user?.email}`,{
      method : 'GET',
      headers : {
        authorization : `Bearer ${localStorage.getItem('access-token')}`
      }
    })
    .then(res => {
       console.log(res.status);
      if(res.status === 401 || res.status === 403){
        singout()
        navigate('/login')

      }else{
        return res.json()
      }
    })
     .then(data =>  setIsAdmin(data.admin))
      
   }
  },[user?.email,loading])
 
  useEffect(() => {
     setTimeout(() => {
    setLoading(true)
},1000)
 
  },[])
  
  const handleLogout = () => {
    singout().then().catch();
  };
  const navbar = (
    <>
     

      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/"
      >
        Home
      </NavLink>
      
      
      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/products"
      >
        Products
      </NavLink>
     
      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/login"
      >
        Login
      </NavLink>
    </>
  );

  return (
  <div className="">
      <div className=" lg:w-9/12  mx-auto  top-0  md:px-0">
     
     <div className="navbar lg:w-9/12  fixed bg-black/30 px-5  rounded-full  backdrop-blur text-white z-30">
       <div className="navbar-start">
         <div className="dropdown">
           <label
             tabIndex={0}
             className="btn text-yellow-500 text-2xl btn-ghost   lg:hidden"
           > 
           <FaBars/>
           </label>
           <ul
             tabIndex={0}
             className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow  backdrop-blur bg-black/40   w-52 rounded border border-gradient-to-tr  border-yellow-500 border-opacity-50 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
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
        
        

        

<div className="dropdown dropdown-end">
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img className="border border-yellow-500 rounded-full" src={user ? user.photoURL : userIcon} alt="" />
             </div>
           </label>

           <ul
             tabIndex={0}
             className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content gap-y-3 bg-black text-white  w-56 rounded-lg"
           >
             <li>{user ? user.displayName : ""}</li>
             <li>{user ? user.email : ""}</li>
              {user ? <NavLink to='dashboard'>
                Dashboard
              </NavLink> : ''}
             {user ? (
           <button
             onClick={handleLogout}
             className="text-white font-philospar uppercase bg-yellow-500 text-[12px] md:py-1 md:text-[16px] px-4  rounded py-[3px]"
           >
             Sing out
           </button>
         ) : (
           ''
         )}
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
