import React from "react";
import { ProductsCarousel } from "@/components/productsCarousel";
import { flashSales } from '@/lib/products'

import prisma from "@/db/db";
import FlashSalesCountdown from "./flashSalesCountdown";
import { Button } from "@/components/ui/button";

async function FlashSales() {
  const products = await prisma.product.findMany({
    where: {isAvailable: true}
})
 
  return (
    <div className="lg:p-20 md:p-10 p-5 w-full">
      <FlashSalesCountdown />
      <ProductsCarousel products={products}/>

      <div className="flex justify-center">
        <Button  className=" mb-10">
          View All Products
        </Button>
      </div>
      <hr />
    </div>
  );
}

export default FlashSales;
