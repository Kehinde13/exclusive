import React from "react";
import { bestSelling } from "@/lib/products";
import { ProductsCarousel } from "@/components/productsCarousel";
import prisma from "@/db/db";

async function BestSeller() {
  const products = await prisma.product.findMany({
    where: {isAvailable: true}
})
  return (
    <div className="lg:p-20 md:p-10 p-5 w-full">
      <div className="flex text-[#DB4444] items-center gap-3 mb-10 font-semibold">
        <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />
        <h1>This Month</h1>
      </div>

      <div className="md:flex justify-between items-center w-full">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Best Selling Product
        </h1>
        <button className="bg-[#DB4444] px-4 py-2 text-white rounded-sm mt-5 md:mt-0">
          View All 
        </button>
      </div>

      <ProductsCarousel products={products} />
    </div>
  );
}

export default BestSeller;
