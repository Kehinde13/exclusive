import React from "react";
import { products } from "@/lib/products";
import { ProductsCarousel } from "@/components/productsCarousel";
import prisma from "@/db/db";

async function OurProducts() {
  const products = await prisma.product.findMany({
    where: {isAvailable: true}
})
  return (
    <div className="lg:p-20 md:p-10 p-5 w-full">
      <div className="flex text-[#DB4444] items-center gap-3 mb-10 font-semibold">
        <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />
        <h1>Our Products</h1>
      </div>

      <h1 className="md:text-4xl text-2xl font-semibold">Explore Our Products</h1>

       <ProductsCarousel products={products} />
    </div>
  );
}

export default OurProducts;
