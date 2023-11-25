import React, { useEffect, useState } from "react";
import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/userCreate/login.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import SocialLogin from "../Components/SocialLogin/SocialLoign";
import useAuth from "../AuthContext/useAuth/useAuth";

const Login = () => {
  const [disabled , setDisabled] = useState(true)
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, user } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    signIn(email,password)
    .then(res => {
      console.log(res);
      // if(localStorage.getItem('access-token')){
      //   navigate(location.state ? location.state : '/')
      // }
      navigate(location.state ? location.state : '/')
    })

  }
  useEffect(() => {
    loadCaptchaEnginge(6); 
  },[])
  
   
    
  
  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }else{setDisabled(true)}
  }
  return (
    <div className="authantication py-32 ">
      <div className=" authantication shadow-lg rounded-xl max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-20">
        <div>
          <img className="w-[500px]" src={logo} alt="" />
        </div>
        <div className="border font-hebo w-1/3 p-10">
          <h1 className="text-center font-semibold text-3xl">Login</h1>
          <div className="mt-8">
            <form onSubmit={handleLogin}>
              <label htmlFor="">
                Email
                <input
                  className="block mb-3 outline-none px-3 py-2 rounded mt-2 border w-full"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Your Email"
                />
              </label>
              <label htmlFor="">
                Confirm Password
                <input
                  className="block mb-3 outline-none px-3 py-2 rounded mt-2 border w-full"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Your Password"
                />
              </label>


              <label htmlFor="">
              <LoadCanvasTemplate />
                <input onBlur={handleCaptcha}
                  className="block mb-3 outline-none px-3 py-2 rounded mt-2 border w-full"
                  type="text"
                  name="captcha"
                  id=""
                  placeholder="Type Value"
                />
              </label>


              <button
              disabled={disabled}
              
                type="submit"
                className="bg-[#FF3811] disabled:bg-rose-300 text-white w-full py-2 rounded"
              >
                Sign in
              </button>
            </form>
            <h1 className="text-sm font-light mt-3 text-center">
              or Sign up with
            </h1>

            <div className="flex items-center justify-center gap-3 mt-4">
              <BsFacebook className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
              <BsLinkedin className="h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full" />
              {/* <BsGoogle className="h-8 w-8 p-2 bg-gray-200 text--600 rounded-full" /> */}
              <SocialLogin/>
            </div>

            <h1 className="text-center font-light mt-4">
              Have an account?{" "}
              <Link to="/register" className="text-[#FF3811]">
                Register
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
