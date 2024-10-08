"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.png";
import { InputWithButton } from "@/components/inputWithButton";
import SideBar from "@/components/landingpageSideBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./ShoppingCart";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between px-3 md:px-10 py-5 items-center shadow-lg sticky top-0 z-50 bg-white">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <ul className="md:flex space-x-5 hidden">
        <Link href={pathname.includes("admin")  ? "/admin" : "/"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname.includes("admin")  ? "Dashboard" : "Home"}
          </li>
        </Link>
        <Link href={pathname.includes("admin")  ? "/admin/products" : "/contact"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname.includes("admin")  ? "Product" : "Contact"}
          </li>
        </Link>
        <Link href={pathname.includes("admin")  ? "/admin/customers" : "/about"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname.includes("admin")  ? "Customers" : "About"}
          </li>
        </Link>
        <Link href={pathname.includes("admin") ? "/admin/sales" : "/auth"}>
          <li className="hover:border-b border-slate-500 cursor-pointer">
            {pathname.includes("admin")  ? "Sales" : "Account"}
          </li>
        </Link>
      </ul>

      {!pathname.includes("admin") && (
        <div className="md:flex items-center space-x-4 hidden">
          <InputWithButton />
          <Cart />
        </div>
      )}

      <SideBar currentPath={pathname} />
    </div>
  );
};

export default NavBar;
