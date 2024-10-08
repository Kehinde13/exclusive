import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/lib/formatter";
import { Button } from "./ui/button";
import addProductToBasket from "@/lib/addProductToCart";

type Prop = {
  product: Product
};

function ProductsCard({ product }: Prop) {
  
  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={product.imagePath} width={400} height={200} alt={product.name} />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{formatCurrency(product.price / 100)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full" onClick={(e) => addProductToBasket( product.id)}>
        Add To Cart{/* <Link href={`/products/${product.id}/purchase`}></Link> */}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductsCard;
