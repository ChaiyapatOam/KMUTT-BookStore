import Image from "next/image";
import ProductCard from "../components/ProductCard";
import FireIcon from "@heroicons/react/24/solid/FireIcon";
import NewStudent from "../components/NewStudent";
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
  return (
    <div className="font-body">
      <div className="p-6">
        <div className="popular pl-4 flex flex-start">
          <h1 className="text-4xl font-bold">Popular</h1>
          <FireIcon className="h-10 w-8 text-orange" />
        </div>

        {/* Product */}
        <div className="p-5 grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 ">
          {nameList.map((p, idx) => {
            return <ProductCard key={idx} name={p} price={20} />;
          })}
        </div>
        {/* <ProductCard name="Name" price={20} /> */}
      </div>
      <NewStudent />
    </div>
  );
}
