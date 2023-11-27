import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const dataPostContent = ({ data, index,refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleReject = (id) => {
    axiosSecure.put(`/postProduct/status2/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "Successfully Added",
          icon: "success",
          title: `Rejected`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const handleAccept = (id) => {
    axiosSecure.patch(`/postProduct/status/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        axiosSecure.post("/watch", data).then((result) => {
          if (result.data.insertedId) {
            console.log(result.data);
            Swal.fire({
              position: "Successfully Added",
              icon: "success",
              title: `Accecpted`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="w-full ">
        <div className="overflow-x-hidden">
          <table className="table">
            <tbody>
              <tr className="text-inherit">
                <th>{index + 1}</th>
                <td className="font-kdam ">{data.product_name}</td>
                  <td className="font-semibold"><Link to='/features'>Go Feature</Link></td>

                <td>
                  {data.status ? (
                    <button disabled className="text-success font-bold">
                      Accepted
                    </button>
                  ) : data.status2 ? (
                    <button disabled className="font-bebas font-bold">
                      Pending
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAccept(data._id)}
                      className="font-bebas font-bold"
                    >
                      Pending
                    </button>
                  )}
                </td>

                <td>
                  {data.status2 ? (
                    <button disabled className="font-bold text-red-500">
                      Rejected
                    </button>
                  ) : data.status ? (
                    <button disabled className="font-bold ">
                      Reject
                    </button>
                  ) : (
                    <button
                      onClick={() => handleReject(data._id)}
                      className=" font-bold"
                    >
                      Reject
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default dataPostContent;
