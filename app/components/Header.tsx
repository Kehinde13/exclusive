"use client";
import * as React from "react"
import { images } from "@/lib/headerImg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import appleLogo from "@/public/assets/Apple_logo.png"
import { MoveRight } from 'lucide-react';

export function Header() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true
        }),
      ]}
      className=""
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="">
            <div className="bg-black text-white md:flex w-full justify-between md:h-screen">
                <div className="p-10 md:py-48 mx-auto">
                    <div className="flex gap-5 items-center">
                        <Image src={appleLogo} alt="apple logo" className=""/>
                        iPhone 15 Series
                    </div>
                    <h1 className="text-4xl md:text-5xl my-8">
                        Up to 10% <br />
                        Off Voucher
                    </h1>

                    <h1 className="flex items-center gap-5">
                        SHOP NOW 
                        <MoveRight />
                    </h1>
                </div>
              
              <Image src={image} alt="iphone 15" className="md:w-[70%] md:h-screen" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
