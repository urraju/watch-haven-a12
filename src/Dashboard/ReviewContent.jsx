import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import HeadingContent from "../shared/HeadingContent";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewContent = () => {
  const axiosSecure = useAxiosSecure();
  const { data: review = [], refetch} = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosSecure.get("/review");
      return res.data;
    },
  });
  const handleAccept = (id) => {
      axiosSecure.patch(`/review/status2/${id}`)
      .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0)  {
          Swal.fire({
            position: "Successfully Added",
            icon: "success",
            title: `Accecpted`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }

    const handleReject = (id) => {
      axiosSecure.put(`/review/status3/${id}`)
      .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0)  {
          Swal.fire({
            position: "Successfully Added",
            icon: "success",
            title: `Accecpted`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }
   
  return (
    <div className="w-full">
        <HeadingContent heading={'review'} subHeading={'review content'}/>
      <div className="w-full p-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-yellow-500  ">
              <tr className="font-kdam ">
                <th className="rounded-tl-lg">No</th>
                <th >Product Name</th>
                <th>Details</th>
                <th>Features</th>
                <th>Accept</th>
                <th className="rounded-tr-lg">Reject</th>
              </tr>
            </thead>
            <tbody>
              {review.map((rev, index) => (
                <tr key={rev.id}>
                  <th>{index + 1}</th>
                  <td className="font-kdam">{rev.product_name}</td>
                  <td className="font-semibold"><Link to={`/details/${rev.product_id}`}>View Details</Link></td>
                  <td className="font-semibold"><Link to='/features'>Go Feature</Link></td>

                  <td>{rev.status2 ? <button disabled  className="text-success font-bold">Accepted</button> : rev.status3 ? <button  disabled className="font-bebas font-bold">Accept</button> :<button onClick={() => handleAccept(rev._id)} className="font-bebas font-bold">Accept</button>}</td>

                  <td>{rev.status3  ? <button disabled className="font-bold text-red-500">Rejected</button>: rev.status2 ? <button disabled className="font-bold ">Reject</button> : <button onClick={() => handleReject(rev._id)} className=" font-bold">Reject</button>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ReviewContent;
