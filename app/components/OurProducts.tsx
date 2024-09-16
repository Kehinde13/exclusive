import React from "react";
import { ProductsCarousel } from "@/components/productsCarousel";
import prisma from "@/db/db";
import { cache } from "@/lib/cache";

const getAllProducts = cache(
  async () => {
    return await prisma.product.findMany({
      where: {isAvailable: true}
    })
  },
  ['/', 'all-products'],
  {revalidate: 60 * 60 * 24}
)
async function OurProducts() {
  const products = await getAllProducts()
  
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
