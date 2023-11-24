import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') 
    return(
        <div>
        {noHeaderFooter ||  <Navbar/>}
         <Outlet/>
        {noHeaderFooter || <Footer/>}
    </div>
    )}
export default Root;