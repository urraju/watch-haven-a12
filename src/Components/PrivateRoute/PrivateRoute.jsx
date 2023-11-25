
import  React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../AuthContext/useAuth/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} =  useAuth()
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
   }
export default PrivateRoute;