import React, { useState } from "react";
import { Card } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Eye, EyeOff, Heart } from "lucide-react";
import StarRating from "./starRating";

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
  const [seen, setSeen] = useState(false);
  const [like, setLike] = useState(false);
  const toggleSeen = () => {
    setSeen(!seen);
  };
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className="p-1">
      <Card className="p-2">
        <div>
          <div className="cursor-pointer" onClick={toggleSeen}>
            {seen ? <EyeOff /> : <Eye />}
          </div>
          <div
            className={`cursor-pointer ${like ? "text-red-500" : ""}`}
            onClick={toggleLike}
          >
            <Heart />
          </div>
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
          {product.discount ? (
            <p className="text-red-500">
              {product.discount}{" "}
              <span className="ml-2 line-through text-gray-400">
                {product.price}
              </span>
            </p>
          ) : (
            <p className="text-red-500">{product.price}</p>
          )}
          <div className="flex gap-5 items-center text-gray-400">
            <StarRating rating={product.ratings} />
            <p className="mt-2">({product.feedbacks})</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductsCard;
