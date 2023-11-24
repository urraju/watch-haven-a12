 
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../User/Login";
import Register from "../User/Register";

 const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>, 
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'register',
                element : <Register/>
            },
        ]
    }
 ])
export default router;