"use client";
import React from "react";
import CountdownTimer from "@/lib/countdowntimer";
import { ProductsCarousel } from "@/components/productsCarousel";
import { flashSales } from '@/lib/products'

function Today() {
  const { days, hours, minutes, seconds } = CountdownTimer();
  return (
    <div className="lg:p-20 md:p-10 p-5 w-full">
      <div className="flex text-[#DB4444] items-center gap-3 mb-10 font-semibold">
        <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />
        <h1>Today&apos;s</h1>
      </div>
      <div className="md:flex md:gap-10 lg:gap-20 items-center font-semibold">
        <h1 className="text-4xl">Flash Sales</h1>
        <div className="flex md:gap-5 gap-2 text-center items-start mt-5 md:mt-2">
          <div>
            <h3 className="text-sm">Days</h3>
            <h1 className="md:text-5xl text-2xl">{days}</h1>
          </div>
          <span className="text-[#DB4444] md:text-5xl text-2xl mt-4">:</span>
          <div>
            <h3 className="text-sm">Hours</h3>
            <h1 className="md:text-5xl text-2xl">{hours}</h1>
          </div>
          <span className="text-[#DB4444] md:text-5xl text-2xl mt-4">:</span>
          <div>
            <h3 className="text-sm">Minutes</h3>
            <h1 className="md:text-5xl text-2xl">{minutes}</h1>
          </div>
          <span className="text-[#DB4444] md:text-5xl text-2xl mt-4">:</span>
          <div>
            <h3 className="text-sm">Seconds</h3>
            <h1 className="md:text-5xl text-2xl">{seconds}</h1>
          </div>
        </div>
      </div>

      <ProductsCarousel products={flashSales}/>

      <div className="flex justify-center">
        <button className="bg-[#DB4444] px-4 py-2 text-white rounded-sm mb-10">
          View All Products
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Today;
