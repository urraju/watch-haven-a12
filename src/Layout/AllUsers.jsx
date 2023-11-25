
import { useQuery } from "@tanstack/react-query";
import { FaTrash,  FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import HeadingContent from "../shared/HeadingContent";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users",{
        headers : {
          authorization : `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });
  
  
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
      console.log(res.data);
      if(res.data.modifiedCount > 0)  {
        Swal.fire({
          position: "Successfully Added",
          icon: "success",
          title: `${user.name} has been Added`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
    })
  }

  const handleDeleted = (user) => {
    console.log(user._id);
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
      <HeadingContent
        heading={"---how many---"}
        subHeading={"manage all users"}
      />
      <div className="flex mt-10 justify-around gap-4">
        <h1 className="text-xl uppercase">All User:</h1>
        <h1 className="text-xl uppercase">Total User : {users.length} </h1>
      </div>

      <div className="w-3/4 mt-10 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-200 bg-opacity-30  ">
              <tr className="rounded-t-xl">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
             {users.map((item,index) =>    
              <tr key={item._id}>
                 <th>{index + 1}</th>
                <th>{item.name}</th>
                <td>{item.email}</td>
                <td>
                {item.role === 'admin'?  <span className="text-violet-600 font-semibold">Admin</span> : <button onClick={()=>handleMakeAdmin(item)}><FaUsers/></button>}
                </td>
                <td>
                  <button onClick={() => handleDeleted(item)}><FaTrash/></button>
                  </td> 
              </tr>)}
             
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};
export default AllUsers;
