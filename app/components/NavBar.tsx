"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.png";
import { InputWithButton } from "@/components/inputWithButton";
import { ShoppingCart, Heart } from "lucide-react";
import SideBar from "@/components/landingpageSideBar";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const NavBar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="flex justify-between px-3 md:px-10 py-5 items-center shadow-lg sticky top-0 z-50 bg-white">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <ul className="md:flex space-x-5 hidden">
        <Link href={pathname === "/admin" ? "/admin" : "/"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname === "/admin" ? "Dashboard" : "Home"}
          </li>
        </Link>
        <Link href={pathname === "/admin" ? "/admin/products" : "/contact"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname === "/admin" ? "Product" : "Contact"}
          </li>
        </Link>
        <Link href={pathname === "/admin" ? "/customers" : "/about"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname === "/admin" ? "Customers" : "About"}
          </li>
        </Link>
        <Link href={pathname === "/admin" ? "/sales" : "/auth"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname === "/admin" ? "Sales" : "Account"}
          </li>
        </Link>
      </ul>

      {!pathname.includes("admin") && (
        <div className="md:flex items-center space-x-4 hidden">
          <InputWithButton />
          <Heart />
          <ShoppingCart />
        </div>
      )}

      <SideBar currentPath={pathname} />
    </div>
  );
};

export default NavBar;
