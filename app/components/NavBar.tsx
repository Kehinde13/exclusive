import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/Logo.png'
import { InputWithButton } from '@/components/inputWithButton'
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import SideBar from '@/components/landingpageSideBar';


const NavBar = () => {
  return (
    <div className='flex justify-between px-3 md:px-10 py-5 items-center shadow-lg'>
        <Image src={logo} alt="logo"/>

        <ul className='md:flex space-x-5 hidden'>
          <li className='hover:border-b border-slate-500 cursor-pointer'>Home</li>
          <li className='hover:border-b border-slate-500 cursor-pointer'>Contact</li>
          <li className='hover:border-b border-slate-500 cursor-pointer'>About</li>
          <li className='hover:border-b border-slate-500 cursor-pointer'>Sign Up</li>
        </ul>

        <div className='md:flex items-center space-x-4 hidden'>
            <InputWithButton />
            <Heart />
            <ShoppingCart />
        </div>

         <SideBar />  
    </div>
  )
}

export default NavBar