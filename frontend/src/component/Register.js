import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../images/image.png"
import { Register as RegisterApi } from '../api/authApi';
function Register() {

  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: ""
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterApi(registerData, navigate)
  }
  const handleChange = (e) => {
    const value = e.target.value
    setRegisterData((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }
  return (
    <div className='bg-[#1e0f3d] flex items-center justify-center h-screen '>
      <div className="registration-container container w-full mt-5 mb-5 pb-5 lg:w-4/5 bg-white lg:bg-white lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        <div className="w-full lg:w-1/2 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
          <img src={image} alt="" className="hidden lg:block w-auto object-cover " />
        </div>
        <form className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">
              <div className="form-caption flex items-end justify-center text-center space-x-3">
                <span className="text-3xl font-semibold text-gray-700">Register</span>

              </div>
              <div className="form-element">
                <label className="w-full block mx-auto">
                  <span className="block text-base text-gray-800 tracking-wide">Name</span>
                  <span className="block">
                    <input type="text"
                      className="bg-white rounded lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400 placeholder:text-xs font-semibold"
                      name='name'
                      placeholder='ENTER YOUR NAME'
                      value={registerData.name}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <label className="w-full block mx-auto">
                  <span className="block text-base text-gray-800 tracking-wide">Email</span>
                  <span className="block">
                    <input
                      type="email"
                      className="bg-white rounded lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400 placeholder:text-xs font-semibold"
                      name='email'
                      placeholder='ENTER YOUR EMAIL'
                      value={registerData.email}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <label className="w-full block mx-auto">
                  <span className="block text-base text-gray-800 tracking-wide">Password</span>
                  <span className="block">
                    <input
                      type="password"
                      className="bg-white rounded lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400 placeholder:text-xs font-semibold"
                      name='password'
                      placeholder='ENTER YOUR PASSWORD'
                      value={registerData.password}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <label className="w-full block mx-auto">
                  <span className="block text-base text-gray-800 tracking-wide">Phone Number</span>
                  <span className="block">
                    <input type="text"
                      className="bg-white rounded lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400 placeholder:text-xs font-semibold"
                      name='phoneNumber'
                      placeholder='ENTER YOUR PHONE NUMBER'
                      value={registerData.phoneNumber}
                      onChange={handleChange} />
                  </span>
                </label>
              </div>
              <div className="form-element">
                <div className="flex items-center justify-between w-full">
                  <label className="text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                    <input type="checkbox" name="" id="" />
                    <span className="block text-gray-800 tracking-wide text-sm">Remember me</span>
                  </label>
                  <Link to="/login" className="text-gray-800 tracking-wide text-sm">Already  Have An Account</Link>
                </div>
              </div>
              <div className="form-element">
                <span className="w-full block mx-auto ">
                  <input type="submit"
                    className="cursor-pointer border-2 rounded-lg border-yellow-200 w-full p-3 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all"
                    onClick={handleSubmit}
                  />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
