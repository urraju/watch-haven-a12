import React from "react";
import { useForm  } from "react-hook-form";
import logo from "../assets/userCreate/register.png"
import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Components/SocialLogin/SocialLoign";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import HelmetUse from "../shared/HelmetUse";
const Register = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {registation,userUpdateProfile} = useAuth()
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registation(data.email,data.password)
    .then(result => {
      userUpdateProfile(data.name, data.photo)
      .then(() => {
        console.log('user profile info updated');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User profile is updated",
          showConfirmButton: false,
          timer: 1500
        });
        reset()
      })
      .catch(errors => console.log(errors))
      const userInfo = {
        name : data.name,
        email : data.email
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        
        if(res.data.insertedId){
          console.log('user added to database');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
        navigate(location.state ? location.state : '/')

      })
      const loggedUser = result.user
      console.log(loggedUser);
    })
  };

   
   
  return (
    <div className="md:py-10">
      <HelmetUse helmet={'Register'}/>
      <div className=" max-w-7xl mx-auto mt-20">
        <div className="flex flex-col p-3 md:flex-row-reverse items-center justify-center md:gap-20">
          <div>
            <img className="hidden md:block" src={logo} alt="" />
          </div>
          <div className="border  rounded-lg border-yellow-300 font-hebo w-full md:w-1/3 p-10">
            <h1 className="text-center font-semibold text-3xl">Sign Up</h1>
            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                  Name
                  <input
                    className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                   
                  />
                   {errors.name && <span className="text-red-600 block">This name is required</span>}
                </label>
                <label htmlFor="">
                  Email
                  <input
                    className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Your Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-600 block">This email is required</span>}
                </label>
                
                <label htmlFor="">
                  Photo
                  <input
                    className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                    type="url"
                    name="photo"
                    id=""
                    placeholder="Photo url"
                    {...register("photo", { required: true })}
                  />
                  {errors.ulr && <span className="text-red-600 block">This  url is required</span>}
                </label>
                <label htmlFor="">
                  Confirm Password
                  <input
                    className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Your Password"
                    {...register("password", { required: true , minLength : 6, maxLength : 12})}
                  />
                  {errors.password && <span className="text-red-600 block">This password is required</span>}
                </label>
                <button
                  type="submit"
                  className="bg-yellow-400 uppercase text-white w-full py-2 rounded"
                >
                  Sign Up
                </button>
                <h1 className="text-sm font-light mt-3 text-center">
                  or Sign up with
                </h1>
              </form>

              <div className="flex items-center justify-center gap-3 mt-4">
                <BsFacebook className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
                <BsLinkedin className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
                {/* <BsGoogle className="h-8 w-8 p-2 bg-gray-200 text--600 rounded-full" /> */}
                <SocialLogin/>
              </div>

              <h1 className="text-center font-light mt-4">
                Already Have an account?{" "}
                <Link to="/login" className="text-yellow-600">
                  Login
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
