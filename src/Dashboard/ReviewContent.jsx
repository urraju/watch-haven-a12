import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ReviewContent = () => {
    const axiosPublic = useAxiosPublic()
    const {data : review=[] } = useQuery({
        queryKey : ['review'],
        queryFn : async () => {
            const res = await axiosPublic.get('/review')
            return res.data
        }
    })
    console.log(review);
    return(
        <div>
             <p> HELLO I Am ReviewContent </p>
        </div>
    )}
export default ReviewContent;