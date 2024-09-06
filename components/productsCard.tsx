import React, { useState } from "react";
import { Card } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Eye, EyeOff, Heart } from 'lucide-react';

type Prop = {
  product: {
    name: string;
    price: string;
    discount: string;
    ratings: number;
    feedbacks: number;
    image: StaticImageData;
  };
};

function ProductsCard({ product }: Prop) {
    const [seen, setSeen] = useState(false)
    const toggleSeen = () => {
        setSeen(!seen)
    }
  return (
    <div className="p-1">
      <Card className="p-2">
        <div>
            <div className="cursor-pointer" onClick={toggleSeen}>{seen ? <EyeOff/> : <Eye />}</div>
            <div className="cursor-pointer"><Heart /></div>   
        </div>
        <Image
          src={product.image}
          alt="product image"
          className="mx-auto"
          width={200}
          height={200}
        />
        <div className="p- flex flex-col gap-2">
          <h1 className="font-semibold">{product.name}</h1>
          <p className="text-red-500">
            {product.discount} <span className="ml-5 line-through text-gray-400">{product.price}</span>
          </p>
          <div className="flex gap-5">
            <p>{product.ratings}</p>
            <p>({product.feedbacks})</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductsCard;
