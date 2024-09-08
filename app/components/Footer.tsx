import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import AppStore from '@/public/assets/AppStore.png'
import googlePlay from '@/public/assets/GooglePlay.png'
import facebook from '@/public/assets/Icon-Facebook.png'
import instagram from '@/public/assets/icon-instagram.png'
import linkedIn from '@/public/assets/Icon-Linkedin.png'
import twitter from '@/public/assets/Icon-Twitter.png'
import QrCode from '@/public/assets/Qr Code.png'
import Image from 'next/image';

function Footer() {
  return (
    <div className="w-full p-5 bg-black">
      <div className="flex flex-col md:flex-row gap-10 text-gray-100 w-[90%] p-10 mx-auto justify-between text-center md:text-left">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Exclusive</h1>
          <p>Subscribe</p>
          <p className='text-xs'>Get 10% off your first order</p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Enter your Email" />
            <Button type="submit">
              <Send />
            </Button>
          </div>
        </div>
        <div>
          <h1 className="font-semibold ">Support</h1>
          <ul className='text-sm flex flex-col gap-5 mt-5'>
            <li>111 ozumba mbadiwe, VI Lagos</li>
            <li>exclusive111@gmail.com</li>
            <li>+234-81-2345-6789</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold ">Account</h1>
          <ul className='text-sm flex flex-col gap-5 mt-5'>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold ">Quick Link</h1>
          <ul className='text-sm flex flex-col gap-5 mt-5'>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold ">Download App</h1>
          <p className='text-sm text-gray-500 my-5'>Save $3 with App New User Only</p>
          <div className='grid grid-cols-2 grid-rows-2'>
            <Image src={QrCode} alt='QrCode' className='row-span-2' />
            <Image src={googlePlay} alt='google play' className='row-span-1' />
            <Image src={AppStore} alt='app store' className='row-span-1' />
          </div>
          <div className='flex justify-between gap-2 mt-5'>
            <Image src={facebook} alt='facebook' />
            <Image src={twitter} alt='twitter' />
            <Image src={instagram} alt='instagram' />
            <Image src={linkedIn} alt='linkedIn' />
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-center text-xs md:text-sm border-t-gray-600 pt-3 border-t">
        &copy; Copyright exclusive 2024 All rights reserved
      </p>
    </div>
  );
}

export default Footer;
