import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useQuerye = () => {
  const axiosSecure = useAxiosSecure()
    const { data: stats = [], refetch  } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
          const res = await axiosSecure.get("https://assignmant-12-server.vercel.app/wacth");
          return res.data;
        }
    })
    return [stats,refetch]
    }
export default useQuerye;