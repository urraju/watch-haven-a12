
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useAuth from "../AuthContext/useAuth/useAuth";
 

const useAdmin = () => {
    const {user,loading} = useAuth()
    const {data : isAdmin= [], isPending} = useQuery({
        queryKey : ['user?.email', 'isAdmin'],
        enabled : !loading,
        queryFn : async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin
        }
    })
    return [isAdmin, isPending]
}
export default useAdmin;