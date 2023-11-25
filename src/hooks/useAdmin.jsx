
import { useQuery } from "@tanstack/react-query";
import useAuth from "../AuthContext/useAuth/useAuth";
import { axiosSecure } from "./useAxiosSecure";
 

const useAdmin = () => {
    const {user,loading} = useAuth()
    console.log(loading);
    const token =  localStorage.getItem('access-token');
    console.log(token);
    if(!token){
        return [false, false]
    }
    const {data : isAdmin, isPending} = useQuery({
        queryKey : [user?.email, 'isAdmin'],
        enabled : !! user?.email && !! token,
        queryFn : async () => {
          if(token && user.email){
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin
          }
        }
    })
    return [isAdmin, isPending]
}
export default useAdmin;