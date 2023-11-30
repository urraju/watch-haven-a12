
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../AuthContext/useAuth/useAuth";
 

export const axiosSecure = axios.create({
    baseURL : 'https://assignmant-12-server.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { singout } = useAuth();

    // request interceptor to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log(token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
    
        return Promise.reject(error);
    });


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await singout();
            navigate('/login');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
    }
export default useAxiosSecure;