import { useQuery } from "@tanstack/react-query";
import { FaChessRook, FaStar, FaUsers } from "react-icons/fa";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdPostAdd } from "react-icons/md";
import HeadingContent from "../shared/HeadingContent";
import { Chart } from "react-google-charts";
import HelmetUse from "../shared/HelmetUse";
const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-status");
      return res.data;
    },
  });
    const data = [
    ["Task", "Website All Analytics"],
    ["User Post", stats.post],
    ["User Review", stats.review],
    ["User", stats.users],
    ["All Product", stats.product],
     
  ];
  
   const options = {
    title: "Full Website Activities",
    pieSliceText: 'value'
  };

  return (
    <div>
      <HelmetUse helmet={'Admin Home'}/>
      <HeadingContent heading={"Admin Pannel"} subHeading={"All Analytics"} />
      <div className="w-full  p-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gradient-to-r h-40  from-violet-600 items-center justify-center p-8 flex gap-5 rounded-md to-violet-300">
          <FaStar className="text-white text-4xl" />
          <div className="font-kdam">
            <p className="text-white font-semibold text-3xl">{stats.review}</p>
            <h1 className="text-white text-xl font-light">User Review</h1>
          </div>
        </div>
        <div className="bg-gradient-to-r h-40   from-orange-500 items-center justify-center p-8 flex gap-5 rounded-md to-yellow-200">
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
            <h1 className="text-white text-xl font-light">All Products</h1>
          </div>
        </div>
        <div className="bg-gradient-to-r h-40    from-sky-500 items-center justify-center p-8 flex gap-5 rounded-md to-sky-200">
          <MdPostAdd className="text-white text-4xl" />
          <div className="font-kdam">
            <p className="text-white font-semibold text-3xl">{stats.post}</p>
            <h1 className="text-white text-xl font-light">User Post product</h1>
          </div>
        </div>
      </div>
      {/* chart create and use part  */}
      <div>
        <div>
          <Chart
            chartType="PieChart"
            
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
