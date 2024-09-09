import Image from "next/image";
import React from "react";
import sideImage from "@/public/assets/Side Image (2).png";
import service3 from "@/public/assets/Services (3).png";
import service4 from "@/public/assets/Services (4).png";
import service5 from "@/public/assets/Services (5).png";
import photo4 from "@/public/assets/Frame 874.png";
import photo5 from "@/public/assets/Frame 875.png";
import photo6 from "@/public/assets/Frame 876.png";
import icon1 from "@/public/assets/icon-instagram (1).png";
import icon2 from "@/public/assets/Icon-Twitter (1).png";
import icon3 from "@/public/assets/Icon-Linkedin (1).png";
import Services from "../components/Services";

function page() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="self-center flex flex-col gap-5 px-10 text-center md:text-left">
          <h1 className="text-5xl font-semibold">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is West Africa’s premier online shopping
            makterplace with an active presense in Nigeria. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <Image src={sideImage} alt="side image" className="hidden md:block" />
      </div>
      <div className="flex flex-col gap-16 md:flex-row justify-between md:mx-20 my-20 text-center items-center">
        <div className="border border-gray-300 rounded-md p-10">
          <Image src={service3} alt="shop icon" className="mx-auto" />
          <h1 className="font-semibold text-3xl my-2">10.5k</h1>
          <p>Sellers active in our site</p>
        </div>
        <div className="border border-gray-300 rounded-md p-10">
          <Image src={service4} alt="shop icon" className="mx-auto" />
          <h1 className="font-semibold text-3xl my-2">45.5k</h1>
          <p>Customers active in our site</p>
        </div>
        <div className="border border-gray-300 rounded-md p-10">
          <Image src={service5} alt="shop icon" className="mx-auto" />
          <h1 className="font-semibold text-3xl my-2">25k</h1>
          <p>Annual gross sale in our site</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-between mx-10 my-32">
        <div>
          <Image src={photo4} alt="founder photo" />
          <h1 className="text-2xl font-semibold my-1">Tom Cruise</h1>
          <p>founder and chairman</p>
          <div className="flex gap-2 mt-2">
            <Image src={icon1} alt="instagram icon" />
            <Image src={icon2} alt="twitter icon" />
            <Image src={icon3} alt="linkedin icon" />
          </div>
        </div>
        <div>
          <Image src={photo5} alt="managing director" />
          <h1 className="text-2xl font-semibold my-1">Emma Watson</h1>
          <p>Managing Director</p>
          <div className="flex gap-2 mt-2">
            <Image src={icon1} alt="instagram icon" />
            <Image src={icon2} alt="twitter icon" />
            <Image src={icon3} alt="linkedin icon" />
          </div>
        </div>
        <div>
          <Image src={photo6} alt="product designer" />
          <h1 className="text-2xl font-semibold my-1">Will Smith</h1>
          <p>Product Designer</p>
          <div className="flex gap-2 mt-2">
            <Image src={icon1} alt="instagram icon" />
            <Image src={icon2} alt="twitter icon" />
            <Image src={icon3} alt="linkedin icon" />
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default page;
