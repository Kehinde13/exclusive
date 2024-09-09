import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.png";
import { InputWithButton } from "@/components/inputWithButton";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import SideBar from "@/components/landingpageSideBar";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between px-3 md:px-10 py-5 items-center shadow-lg">
      <Image src={logo} alt="logo" />

      <ul className="md:flex space-x-5 hidden">
        <Link href={"/"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            Home
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            Contact
          </li>
        </Link>
        <Link href={"/about"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            About
          </li>
        </Link>
        <Link href={"/auth"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            Log In
          </li>
        </Link>
      </ul>

      <div className="md:flex items-center space-x-4 hidden">
        <InputWithButton />
        <Heart />
        <ShoppingCart />
      </div>

      <SideBar />
    </div>
  );
};

export default NavBar;
