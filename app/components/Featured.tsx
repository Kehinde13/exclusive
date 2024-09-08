import React from "react";
import PS5 from "@/public/assets/ps5-slim-goedkope-playstation_large 1.png";
import womenFashion from "@/public/assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import speaker from "@/public/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import perfume from "@/public/assets/Frame 706.png";
import Image from "next/image";

function Featured() {
  return (
    <div className="lg:p-20 md:p-10 p-5 w-full">
      <div className="flex text-[#DB4444] items-center gap-3 mb-10 font-semibold">
        <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />
        <h1>Featured</h1>
      </div>

      <h1 className="md:text-4xl text-2xl font-semibold">New Arrival</h1>

      <div className="flex flex-col md:grid grid-cols-8 grid-rows-2 gap-5 my-10 text-white">
        <div className="bg-black col-span-4 row-span-2 rounded-md relative">
          <Image src={PS5} alt="ps5" className="md:ml-10 md:pt-20" />
          <div className="bottom-1 md:bottom-5 absolute p-5 flex flex-col gap-1 md:gap-3">
            <h1 className="md:text-3xl text-xl font-semibold">PlayStation 5</h1>
            <p className="md:w-[70%] text-sm">
              Black and White version of the PS5 coming out on sale
            </p>
            <p className="border-b-2 md:w-[23%] w-[35%]">Shop Now</p>
          </div>
        </div>
        <div className="bg-black col-span-4 row-span-1 rounded-md relative">
          <Image
            src={womenFashion}
            alt="women fashion"
            className="rounded-md float-right"
          />
          <div className="bottom-1 absolute p-5 flex flex-col gap-1 md:gap-3">
            <h1 className="md:text-3xl text-xl font-semibold">
              Women&apos;s Collections
            </h1>
            <p className="md:w-[70%] text-sm">
              Featured women collection that gives you another vibe
            </p>
            <p className="border-b-2 md:w-[23%] w-[35%]">Shop Now</p>
          </div>
        </div>
        <div className="bg-black col-span-2 rounded-md relative">
          <Image src={speaker} alt="speaker" className="mx-auto md:pt-8" />
          <div className="bottom-1 absolute p-5 flex flex-col gap-1">
            <h1 className="md:text-3xl text-xl font-semibold">Speakers</h1>
            <p className=" text-sm">amazon wireless speakers</p>
            <p className="border-b-2 w-[50%]">Shop Now</p>
          </div>
        </div>
        <div className="bg-black col-span-2 rounded-md relative">
          <Image src={perfume} alt="perfume" className="mx-auto md:pt-8" />
          <div className="bottom-1 absolute p-5 flex flex-col gap-1">
            <h1 className="md:text-3xl text-xl font-semibold">Perfume</h1>
            <p className=" text-sm">GUCCI Intense OUD EDP</p>
            <p className="border-b-2 w-[50%]">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
