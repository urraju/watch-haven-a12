


import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../AuthContext/useAuth/useAuth";

const SocialLogin = () => {
    const {google} = useAuth()
    const nagivate = useNavigate()
    const handleGoogle = () => {
        google()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email : result.user?.email,
                name :  result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                nagivate('/')
            })
        })
        
    }

    return(
        <div>
             <div onClick={handleGoogle} className=" h-8 cursor-pointer w-8 p-2 rounded-full bg-gray-200">
                <FaGoogle className="text-orange-600"/>
             </div>
        </div>
    )}
export default SocialLogin;