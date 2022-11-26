import React from "react";
import Link from "next/link";


const Navbar = () => {
  return <div>
  <div className="bg-header p-6 ">
    <img className="h-[60px] pl-4" src="/kmutt-logo.png"/>
  </div>
  <div className="bg-navbar text-white font-bold flex ">
    <div className="p-6 py-3 flex-shirnk">
      <a className="px-4" href="">Home</a>
    </div>
    <div className="p-6 py-3 flex-shirnk">
      <a className="px-3" href="">Check oder</a>
    </div>
    <div className="p-6 py-3 flex-grow">
      <a className="px-3" href="">New Student</a>
    </div>
    <div className="p-6 py-3 ">
      <img className="bg-red-500 px-3 w-[70px] h-[70px]" src="/search-icon.png" alt="" />
    </div>
  </div>
  </div>

}

export default Navbar;
