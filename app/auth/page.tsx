"use client"
import Image from "next/image";
import React, { useState } from "react";
import sideImg from "@/public/assets/Side Image.png";
import Login from "../components/Login";
import Signup from "../components/Signup";


function page() {
    const [login, setLogin] = useState(false)
    const toggleLogin = () => {
        setLogin(!login)
    }

  return (
    <div className="flex h-screen">
      <Image src={sideImg} alt="side image" className="hidden md:block" />
      <div className="md:ml-20 md:mt-20 mt-10 md:w-[40%] w-[80%] mx-auto">
        <h1 className="text-2xl font-semibold mb-3">{login ? "Log in to Exclusive" : "Create an account"}</h1>
        <p>Enter your details below</p>
        {
            login ? <Login toggleLogin={toggleLogin} /> : <Signup toggleLogin={toggleLogin} />
        }
      </div>
    </div>
  );
}

export default page;
