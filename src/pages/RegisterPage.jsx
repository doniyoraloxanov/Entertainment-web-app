import React from "react";

const Register = () => {
  return (
    <div className="bg-gray-800 py-10 px-8  my-24 rounded-lg  max-w-md mx-auto">
      <h2 className="text-white text-2xl mb-8">Login</h2>
      <form className="flex flex-col space-y-3  mb-4">
        <input
          type="email"
          placeholder="Email address"
          className="pl-4 py-3 outline-none bg-black text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="pl-4 py-3 outline-none  bg-black text-white "
        />

        <button className="block  text-white font-semibold px-4 py-3 bg-red-500 hover:bg-white hover:text-gray-500 cursor-pointer">
          Login to your account
        </button>
      </form>
      <div className="flex space-x-4 px-11  justify-center ">
        <p className="text-white">Don't have a account?</p>
        <p className="text-red-500 font-semibold">Sign Up</p>
      </div>
    </div>
  );
};

export default Register;
