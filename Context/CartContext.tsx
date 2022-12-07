import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

type Product = {
  name: string;
  description: string;
  price: number;
  images: string[];
};
type Price_data = {
  currency: string | "thb";
  product_data: Product;
  unit_amount_decimal: string;
};
type CartContextValue = [
  {
    price_data: Price_data;
    quantity: number;
  }
];
// let Cart: CartContextValue = [];
type CartProviderProps = {
  children: ReactNode;
};
// const CartContext = createContext<CartContextValue>([]);
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartContextValue>();

  const contextValue: CartContextValue = [
    {
      price_data: {
        currency: "thb",
        product_data: {
          name: "",
          description: "",
          price: 0,
          images: [],
        },
        unit_amount_decimal: "",
      },
      quantity: 0,
    },
  ];

  return;
  // <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
};
