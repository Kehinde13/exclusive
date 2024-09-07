import React from "react";
import {
  Smartphone,
  LaptopMinimal,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";

export const Categories = () => {
  const categories = [
    {
      name: "Phones",
      icon: Smartphone,
    },
    {
      name: "Computers",
      icon: LaptopMinimal,
    },
    {
      name: "Smart Watch",
      icon: Watch,
    },
    {
      name: "Camera",
      icon: Camera,
    },
    {
      name: "HeadPhones",
      icon: Headphones,
    },
    {
      name: "Gaming",
      icon: Gamepad2,
    },
  ];
  return (
    <div className="lg:p-20 md:p-10 p-5 w-full">
      <div className="flex text-[#DB4444] items-center gap-3 mb-10 font-semibold">
        <div className="w-4 h-10 bg-[#DB4444] rounded-sm" />
        <h1>Categories</h1>
      </div>

      <h1 className="md:text-4xl text-2xl font-semibold">Browse By Category</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 my-10 md:my-16">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center border-gray-300 rounded-md border p-2 hover:bg-[#DB4444] hover:text-white cursor-pointer"
          >
            <category.icon className="h-20 w-20 mx-auto my-5" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};
