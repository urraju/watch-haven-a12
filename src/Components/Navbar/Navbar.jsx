import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import useAuth from "../../AuthContext/useAuth/useAuth";
 
 
const Navbar = () => {
  const { user, singout } = useAuth();
 
  
  const handleLogout = () => {
    singout().then().catch();
  };
  const navbarManu = (
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
      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/contactus"
      >
        Contact Up
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
        Our Menu
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        to="/ourshop"
      >
        Our Shop
      </NavLink>
    </>
  );

  return (
    <div className=" max-w-screen-2xl mx-auto ">
      <div className="navbar fixed bg-black/30  py-3 rounded-t rounded-lg max-w-screen-2xl backdrop-blur text-white z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm gap-5 uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarManu}
            </ul>
          </div>
          <div className="pl-6">
            <p className="uppercase font-semibold text-xl">Bistro Boos</p>
            <p className="tracking-widest text-lg uppercase">Restaurent</p>
          </div>
        </div>

        <div className="navbar-end items-center gap-2 justify-center">
          <ul className="menu menu-horizontal gap-5 uppercase px-1">
            {navbarManu}
          </ul>
          {/* <img className="w-10" src={} alt="" /> */}
          {user?.email ? (
            <a onClick={handleLogout} className=" cursor-pointer uppercase text-yellow-500">
              Logout
            </a>
          ) : (
            <Link to="/login">
              <a className=" cursor-pointer uppercase text-success">login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
