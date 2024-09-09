import React from "react";
import googleIcon from "@/public/assets/Icon-Google.png";
import Image from "next/image";

type Prop = {
  toggleLogin: () => void;
};

function Login({ toggleLogin }: Prop) {
  return (
    <form className="flex flex-col gap-6 mt-5 md:w-[80%]">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="py-3 border-gray-400 border-b bg-white"
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="Password"
        className="py-3 border-gray-400 border-b"
      />
      <div className="flex gap-2 justify-between">
        <p onClick={toggleLogin} className="cursor-pointer">
          Sign Up
        </p>
        <p className="text-[#DB4444] cursor-pointer">Forgot Password?</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <button className="bg-[#DB4444] rounded-md py-2 md:px-6 p-2 text-white">
          Log In
        </button>
        <button className=" rounded-md py-2 flex border md:px-6 p-2 border-gray-400 justify-center gap-3">
          <Image src={googleIcon} alt="google icon" />
          Log In with Google
        </button>
      </div>
    </form>
  );
}

export default Login;
