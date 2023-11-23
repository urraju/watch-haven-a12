import { useContext } from "react";
import AuthContext, { AuthProvider } from "../AuthContext";
 

const useAuth = () => {
    const auth = useContext(AuthProvider)
    return auth
    }
export default useAuth;