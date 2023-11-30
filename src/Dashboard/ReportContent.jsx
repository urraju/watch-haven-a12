import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import HeadingContent from "../shared/HeadingContent";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ReportContent = () => {
  const axiosSecure = useAxiosSecure();
  const { data: report = [], refetch } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await axiosSecure.get("/report");
      return res.data;
    },
  });

  const handleDeleted = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/report/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
  }
  
  return (
    <div className="w-full">
        <HeadingContent heading={'Report'} subHeading={'Report content'}/>
      <div className="md:px-20 py-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-yellow-500  ">
              <tr className="font-kdam">
                <th className="rounded-tl-lg">No</th>
                <th>Product Name</th>
                <th>Details</th>
                <th className="rounded-tr-lg ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {report.map((repo,index) => (
                <tr key={repo._id} className="backdrop-blur mb-3 bg-white/20">
                  <th>{index+1}</th>
                  <td className="text-  font-kdam">{repo.product_name}</td>
                  <td className="font-semibold"><Link to={`/details/${repo.product_id}`}>View Details</Link></td>
                  <td><button onClick={() => handleDeleted(repo._id)}><MdDelete className="text-lg text-red-500"/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ReportContent;
