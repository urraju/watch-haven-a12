import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllData = () => {
 
  const axiosPublic = useAxiosPublic();
  const {
    data: watch = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["watch"],
    queryFn: async () => {
      const res = await axiosPublic.get("/watch");

      return res.data;
    },
  });

  return [watch, refetch, loading];
};
export default useAllData;
