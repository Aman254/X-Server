import React from "react";
import google from "../Images/google.webp";
import apple from "../Images/apple.png";
import Input from "../Components/Input";
import twitter from "../Images/twitter.webp";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="p-2 m-2 rounded-lg flex items-center gap-2">
        <img src={twitter} alt="Twitter Logo  " className="w-10 h-10" />
        <span className="text-xl font-semibold">Twitter</span>
      </div>

      <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
        <div className="p-4 m-2 max-w-md w-full rounded-lg shadow-lg bg-white">
          {/** Register Text */}
          <div className="text-center mb-4">
            <span className="p-4 m-2 font-medium text-xl">Login Here</span>
          </div>

          <div className="flex items-center gap-4 justify-center">
            {/** Signup with Google Button */}
            <button className="p-4 m-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-all md:px-10">
              <img src={google} alt="Google Logo" className="w-5 h-5" />
              <span className="text-sm text-gray-700">Google</span>
            </button>

            {/** Signup with Apple Button */}
            <button className="p-4 m-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-all hover:text-gray-800 md:px-10">
              <img src={apple} alt="Apple Logo" className="w-5 h-5" />
              <span className="text-sm text-gray-700">Apple</span>
            </button>
          </div>
          <hr className="shadow-lg mt-4" />

          {/** Name Tag */}
          <div className="p-4 w-full">
            <span className="text-sm font-medium text-gray-700 mb-2">Name</span>
            <Input type="text" placeholder="Enter your Name here.." />
          </div>

          {/** Email Input */}
          <div className="p-4 w-full">
            <span className="text-sm font-medium text-gray-700 mb-2">
              Email
            </span>
            <Input type="text" placeholder="Enter your Email here.." />
          </div>

          {/** Password Input */}
          <div className="p-4 w-full">
            <span className="text-sm font-medium text-gray-700 mb-2">
              Enter Password
            </span>
            <Input type="password" placeholder="Enter your password here.." />
          </div>

          <button className="p-4 w-full bg-black rounded-lg mt-6 text-center hover:bg-gray-900 transition-all">
            <span className="text-base text-white">Login</span>
          </button>
          <div className="p-4 w-full text-center">
            <Link to="/register">
              <span className="text-sm">
                Don't have an Account?{" "}
                <strong className="cursor-pointer text-base hover:text-gray-800 transition-all">
                  Register
                </strong>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
