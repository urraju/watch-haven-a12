import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import UserPostContent from "./userPostContent";
import HeadingContent from "../shared/HeadingContent";
 


const PostContent = () => {

    const axiosSecure = useAxiosSecure
    ();
    const { data: postData = [] ,refetch } = useQuery({
      queryKey: ["postData"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/postProduct`);
        return res.data;
      },
       
    });
    console.log(postData);
    
  
     


    return(
        <div className="w-full ">
              <HeadingContent heading={'post'} subHeading={'post products'}/>
             <div className=" md:px-32 md:py-10">
            <div className="overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead className="bg-yellow-500  ">
              <tr className="font-kdam ">
                <th className="rounded-tl-lg">No</th>
                <th >Product Name</th>
                <th> Add Feature</th>
                <th>Veiw Details</th>
                <th>Accept</th>
                <th className="rounded-tr-lg">Reject</th>
              </tr>
            </thead>
            
          </table>
            </div>
                {postData.map((item,index) => <UserPostContent refetch={refetch} data={item}  index={index} key={item._id}/>  )}
             </div>
        </div>
    )}
export default PostContent;