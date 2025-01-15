import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import image from "../images/image.png"

import { Login as LoginApi } from "../api/authApi";

function Login() {

  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate()
  
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedPassword = localStorage.getItem('password');
    if (savedPassword) {
      setLoginData(prevState => ({ ...prevState, password: savedPassword }));
      setRememberMe(true);
    }
  }, []);

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem('password', loginData.password);
    } else {
      localStorage.removeItem('password');
    }
  };


  const handlesubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('password', loginData.password);
    } else {
      localStorage.removeItem('password');
    }
    LoginApi(loginData,navigate)
  }


  const handleChange = (e) => {
  const  value = e.target.value
  setLoginData((prev)=>{
    return {...prev,[e.target.name]:value}
  })
  }

  return (
      <div className='bg-[#1e0f3d] flex items-center justify-center h-screen '>
        <div className="login-container container w-full lg:w-4/5 lg:bg-white bg-white h-auto pb-24 lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        <div className="w-full lg:w-1/2 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
          <img src={image} alt="" className="hidden lg:block w-auto object-cover" />
        </div>
          <form className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
              <div className="w-full space-y-5">
                <div className="form-caption flex items-end justify-center text-center space-x-3 mb-5">
                  <span className="text-3xl font-semibold text-gray-700">Login</span>
                </div>
                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5  mx-auto">
                    <span className=" text-base text-gray-800 tracking-wide ">Email</span>
                    <span className="">
                      <input type="text"
                        className="rounded lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400 placeholder:text-sm font-sans"
                        value={loginData.email}
                        onChange={handleChange} 
                        name='email'
                        placeholder='Enter your email address'
                        />
                    </span>
                  </label>
                </div>
                <div className="form-element">
                  <label className="space-y-2 w-full lg:w-4/5  mx-auto">
                    <span className=" text-base text-gray-800 tracking-wide">Password</span>
                    <span className="">
                      <input type="password"
                        className="rounded lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400 placeholder:text-sm font-sans"
                        value={loginData.password}
                        onChange={handleChange}
                        name='password'
                        placeholder='Enter your password'
                        />
                    </span>
                  </label>
                </div>
                <div className="form-element">
                <div className="rounded w-full mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                  <label className="text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                    <input
                      checked={rememberMe} 
                      onChange={handleRememberMeChange}
                      type="checkbox" 
                      id="rememberMe"
                    />
                    <span className="text-gray-800 tracking-wide text-sm">Remember me</span>
                  </label>

                  <Link 
                    to="/register" 
                    className="text-gray-800 tracking-wide text-sm text-center">
                    Create New Account
                  </Link>

                  <button 
                    type="button" 
                    className="text-blue-800 tracking-wide text-sm hover:underline text-center">
                    Forgot Password?
                  </button>
                </div>
                </div>
                <div className="form-element">
                  <span className="w-full mx-auto ">
                    <input type="submit" onClick={handlesubmit} className="rounded cursor-pointer border-2 border-yellow-200 w-full p-3 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all" />
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
