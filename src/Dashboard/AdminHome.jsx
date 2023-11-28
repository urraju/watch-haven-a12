import { useQuery } from "@tanstack/react-query";
import {
  FaAmbulance,
  FaChessRook,
  FaPooStorm,
  FaRainbow,
  FaStar,
  FaStarAndCrescent,
  FaUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdPostAdd } from "react-icons/md";
import HeadingContent from "../shared/HeadingContent";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-status");
      return res.data;
    },
  });
  return (
    <div>
        <HeadingContent heading={'Admin Pannel'} subHeading={'All Analytics'}/>
      <div className="w-full  p-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gradient-to-r h-40  from-violet-600 items-center justify-center p-8 flex gap-5 rounded-md to-violet-300">
          <FaStar className="text-white text-4xl" />
          <div className="font-kdam">
            <p className="text-white font-semibold text-3xl">{stats.review}</p>
            <h1 className="text-white text-xl font-light">Review</h1>
          </div>
        </div>
        <div className="bg-gradient-to-r h-40    from-orange-500 items-center justify-center p-8 flex gap-5 rounded-md to-yellow-200">
          <FaUsers className="text-white text-4xl" />
          <div className="font-kdam">
            <p className="text-white font-semibold text-3xl">{stats.users}</p>
            <h1 className="text-white text-xl font-light">Users</h1>
          </div>
        </div>

        <div className="bg-gradient-to-r h-40   from-rose-500 items-center justify-center p-8 flex gap-5 rounded-md to-rose-200">
          <FaChessRook className="text-white text-4xl" />
          <div className="font-kdam">
            <p className="text-white font-semibold text-3xl">{stats.product}</p>
            <h1 className="text-white text-xl font-light">Products</h1>
          </div>
        </div>
        <div className="bg-gradient-to-r h-40    from-sky-500 items-center justify-center p-8 flex gap-5 rounded-md to-sky-200">
          <MdPostAdd className="text-white text-4xl" />
          <div className="font-kdam">
            <p className="text-white font-semibold text-3xl">{stats.post}</p>
            <h1 className="text-white text-xl font-light">Post product</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
