"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-xl text-blue-500">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4 text-xl">
          <h4 className="font-semibold text-indigo-900">Size:</h4>
          <div>{data?.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4 text-xl">
          <h4 className="font-semibold text-indigo-900">Color:</h4>
          <div
            className="h-6 w-6 rounded-full border border-white"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
