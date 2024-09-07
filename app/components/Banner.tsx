"use client"
import Image from "next/image";
import React from "react";
import jblSpeaker from "@/public/assets/Frame 694.png";
import CountdownTimer from "@/lib/countdowntimer";

function Banner() {
  const { days, hours, minutes, seconds } = CountdownTimer();
  return (
    <div className="my-10 md:my-16 bg-black rounded-sm md:p-10 p-5 w-[90%] mx-auto md:flex justify-between">
      <div className="flex flex-col gap-5 md:gap-10 p-5 md:p-10">
        <h4 className="text-[#00FF66] font-semibold">Categories</h4>
        <h1 className="text-white text-2xl font-semibold md:text-5xl">
          Enhance Your Music Experience
        </h1>

        <div className="flex gap-2 md:gap-0 justify-between text-xs font-semibold md:w-[60%]">
          <div className="rounded-full bg-white p-2 text-center">
            <p>{hours}</p>
            <p>hours</p>
          </div>
          <div className="rounded-full bg-white p-2 text-center">
            <p>{days}</p>
            <p>days</p>
          </div>
          <div className="rounded-full bg-white p-2 text-center">
            <p>{minutes}</p>
            <p>mins</p>
          </div>
          <div className="rounded-full bg-white p-2 text-center">
            <p>{seconds}</p>
            <p>secs</p>
          </div>
        </div>

        <button className="bg-[#00FF66] self-start rounded-sm px-4 py-1 md:px-8 md:py-2 text-white">
          Buy Now
        </button>
      </div>
      <Image src={jblSpeaker} alt="speaker" />
    </div>
  );
}

export default Banner;
