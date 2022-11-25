import React from "react";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
const ProductCard = ({ name, price }: { name: string; price: number }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-[20rem] max-h-[20rem] dark:bg-gray-800 dark:border-gray-700 hover:border-orange">
      <img
        className="rounded-t-lg"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt=""
      />
      <div className="p-3 flex justify-between items-center">
        <span className="text-black  tracking-tight mb-1 dark:text-white">
          <h4 className="text-black font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {name}
          </h4>
          <p className="text-xl">{price} ฿</p>
        </span>
        <div className="h-10 w-10 text-orange cursor-pointer">
          <ShoppingCartIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
