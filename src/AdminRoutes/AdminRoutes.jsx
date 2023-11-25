

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../AuthContext/useAuth/useAuth";

const AdminRoute = ({children}) => {
    const  {user, loading} = useAuth()
    const [isAdmin,isPending] = useAdmin()
     const location = useLocation()
    if(loading || isPending){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate state={location.pathname} to='/' replace></Navigate>
   }
export default AdminRoute;