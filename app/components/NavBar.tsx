"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/Logo.png";
import { InputWithButton } from "@/components/inputWithButton";
import { ShoppingCart, Heart } from "lucide-react";
import SideBar from "@/components/landingpageSideBar";
import Link from "next/link";

const NavBar = () => {
  const [currentPath, setCurrentPath] = useState("");

  // This ensures that client-side-only logic runs after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="flex justify-between px-3 md:px-10 py-5 items-center shadow-lg sticky top-0 z-50 bg-white">
      <Image src={logo} alt="logo" />

      <ul className="md:flex space-x-5 hidden">
        <Link href={currentPath === "/" ? "/" : "/admin"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {currentPath === "/" ? "Home" : "Dashboard"}
          </li>
        </Link>
        <Link href={currentPath === "/" ? "/contact" : "/product"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {currentPath === "/" ? "Contact" : "Product"}
          </li>
        </Link>
        <Link href={currentPath === "/" ? "/about" : "/customers"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
          {currentPath === "/" ? "About" : "Customers"}
          </li>
        </Link>
        <Link href={currentPath === "/" ? "/auth" : "/sales"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
          {currentPath === "/" ? "Account" : "Sales"}
          </li>
        </Link>
      </ul>

      {currentPath !== "/admin" && (
        <div className="md:flex items-center space-x-4 hidden">
          <InputWithButton />
          <Heart />
          <ShoppingCart />
        </div>
      )}

      <SideBar currentPath={currentPath} />
    </div>
  );
};

export default NavBar;
