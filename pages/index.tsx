import Image from "next/image";
import ProductCard from "../components/ProductCard";
import FireIcon from "@heroicons/react/24/solid/FireIcon";
import NewStudent from "../components/NewStudent";
import product from "data/products";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useMutation, useQuery } from "@tanstack/react-query";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
export default function Home() {
  const nameList = [
    "Apple",
    "T-Shirt",
    "Name",
    "Book",
    "YearBook",
    "LNG120",
    "LNG220",
    "Pen",
    "Pencil",
    "Table",
    "Belt",
    "Necktie",
  ];
  const stripePromiseclientSide = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { mutate, isLoading: mutationIsLoading } = useMutation(
    async (body: any) => {
      try {
        const respJSON = await fetch("/api/create-checkout-session", {
          method: "POST",
          body: JSON.stringify(body),
        });
        const resp = await respJSON.json();
        const stripe = (await stripePromiseclientSide) as Stripe;
        const result = await stripe.redirectToCheckout({
          sessionId: resp.id,
        });
        return result;
      } catch (error) {
        throw error;
      }
    }
  );
  return (
    <div className="font-body">
      <div className="p-6">
        <div className="popular pl-4 flex flex-start">
          <h1 className="text-4xl font-bold">Popular</h1>
          <FireIcon className="h-10 w-8 text-orange" />
        </div>

        {/* Product */}
        <div className="p-5 grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 ">
          {product.map((p, idx) => {
            return (
              <ProductCard key={idx} id={p.id} name={p.name} price={p.price} />
            );
          })}
        </div>
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-[20rem] max-h-[20rem] dark:bg-gray-800 dark:border-gray-700 hover:border-orange">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
          <div className="p-3 flex justify-between items-center">
            <span className="text-black  tracking-tight mb-1 dark:text-white">
              <h4 className="text-black font-bold text-2xl tracking-tight mb-2 dark:text-white">
                Test Mode
              </h4>
              <p className="text-xl">12345 ฿</p>
            </span>
            <div className="h-10 w-10 text-orange cursor-pointer">
              <ShoppingCartIcon
                onClick={() =>
                  mutate({
                    title: "Test Product1",
                    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
                    description: "this product description",
                    price: 2342,
                    quantity: 2
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <NewStudent />
    </div>
  );
}
