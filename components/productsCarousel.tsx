import * as React from "react"
import ProductsCard from "./productsCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from '@/lib/products'

export function ProductsCarousel() {
  return (
    <Carousel className="w-full mt-10 md:mt-20">
      <CarouselContent className="-ml-1">
        {products.map((product, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <ProductsCard product={product}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className="hidden md:block"/>
    </Carousel>
  )
}
