import React from "react";
import { ProductsCarousel } from "@/components/productsCarousel";
import prisma from "@/db/db";
import FlashSalesCountdown from "./flashSalesCountdown";
import { Button } from "@/components/ui/button";
import { cache } from "@/lib/cache";

// Create a cached version of the product query
const getAvailableProducts = cache(
  async () => {
    return await prisma.product.findMany({
      where: { isAvailable: true },
    });
  },
  ["/", "flash-sales-products"], // Key parts for cache identification
  { revalidate: 60 * 60 * 24} // Cache revalidation time in seconds (optional)
);

async function FlashSales() {
  const products = await getAvailableProducts(); // Use the cached query function

  return (
    <div className="lg:p-20 md:p-10 p-5 w-full">
      <FlashSalesCountdown />
      <ProductsCarousel products={products} />

      <div className="flex justify-center">
        <Button className="mb-10">
          View All Products
        </Button>
      </div>
      <hr />
    </div>
  );
}

export default FlashSales;
