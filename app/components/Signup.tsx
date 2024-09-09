import React from "react";
import googleIcon from "@/public/assets/Icon-Google.png";
import Image from "next/image";

type Prop = {
  toggleLogin: () => void;
};

function Signup({ toggleLogin }: Prop) {
  return (
    <form className="flex flex-col gap-6 md:mt-5 md:w-[80%]">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="py-3 border-gray-400 border-b"
      />
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
      <button className="bg-[#DB4444] rounded-md py-2 text-white">
        Create Account
      </button>
      <button className=" rounded-md py-2 flex border border-gray-400 justify-center gap-3">
        <Image src={googleIcon} alt="google icon" />
        Sign up with Google
      </button>
      <p className="text-center">
        Already have an account? <span onClick={toggleLogin} className="cursor-pointer">Log In</span>
      </p>
    </form>
  );
}

export default Signup;
