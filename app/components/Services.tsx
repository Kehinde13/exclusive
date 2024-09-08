import React from "react";
import delivery from "@/public/assets/Services (2).png";
import customerCare from "@/public/assets/Services.png";
import guarantee from "@/public/assets/Services (1).png";
import Image from "next/image";

function Services() {
  return (
    <div className="w-full mx-auto my-10 md:my-20 text-center flex flex-col md:flex-row justify-around gap-8 md:gap-5">
      <div>
        <Image src={delivery} alt="delivery truck" className="mx-auto" />
        <h1 className="font-semibold my-2">FREE AND FAST DELIVERY</h1>
        <p className="text-sm">Free delivery for all orders over $140 </p>
      </div>
      <div>
        <Image src={customerCare} alt="customer Care" className="mx-auto"/>
        <h1 className="font-semibold my-2">24/7 CUSTOMER SERVICES</h1>
        <p className="text-sm">Friendly 24/7 customer support</p>
      </div>
      <div>
        <Image src={guarantee} alt="guarantee" className="mx-auto"/>
        <h1 className="font-semibold my-2">MONEY BACK GUARANTEE</h1>
        <p className="text-sm">We return money within 30 days</p>
      </div>
    </div>
  );
}

export default Services;
