

import { useQuery } from "@tanstack/react-query";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useModerator = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useAuth()
    const {data : isModerator= [], isPending} = useQuery({
        queryKey : ['user?.email', 'isModerator'],
        enabled : !loading,
        queryFn : async () => {
            const res = await axiosSecure.get(`/users/moderator/${user.email}`)
            return res.data?.moderator
            
        
        }
    })
    return [isModerator, isPending]
}
export default useModerator;