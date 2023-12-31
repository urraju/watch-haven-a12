import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../AuthContext/useAuth/useAuth";
import HeadingContent from "../shared/HeadingContent";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete, MdEdit, MdSystemUpdate, MdUpdate } from "react-icons/md";
import HelmetUse from "../shared/HelmetUse";

const MyProducts = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: myProduct = [] ,refetch } = useQuery({
    queryKey: ["myProductss", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/postProduct?email=${user?.email}`);
      return res.data;
    },
     
  });
  console.log("product", myProduct);
  const handleDelete = (id) => {
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
      axiosSecure.delete(`/postProduct/${id}`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch()
        }
      });
    }
  });
}
  return (
    <div className="w-full">
      <HelmetUse helmet={'My Products'}/>
      <HeadingContent heading={"product"} subHeading={"My products"} />
      <div className="md:px-32 md:mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-yellow-500  ">
              <tr className="font-kdam ">
                <th className="rounded-tl-lg">No</th>
                <th>Product Name</th>
                <th>Vote Count</th>
                <th>Update</th>
                <th className="rounded-tr-lg">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myProduct.map((pro, index) => (
                <tr key={pro._id}>
                  <th>{index + 1}</th>
                  <td className="font-kdam">{pro.product_name}</td>
                  <td>{pro.vote}</td>

                  <td>
                    <Link to={`/DashBoard/editProduct/${pro._id}`}><button  className=" bg-green-500 bg-opacity-25 text-green-600 p-2 text-lg rounded-full"><MdEdit/></button></Link>
                  </td>

                  <td>
                    <button className="text-lg bg-red-500 bg-opacity-25 text-red-600 p-2 rounded-full" onClick={() => handleDelete(pro._id)}><MdDelete/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MyProducts;
