import React from "react";
import Link from "next/link";


const Navbar = () => {
  return <div>
  <div className="bg-header p-6 ">
    <img className="h-[60px] pl-4" src="/kmutt-logo.png"/>
  </div>
  <div className="bg-navbar text-white font-bold">
    <div className="p-6 py-3">
      <a className="px-4" href="">Home</a>
      <a className="px-3" href="">Check oder</a>
      <a className="px-3" href="">New Student</a>
    </div>
  </div>
  </div>

}

export default Navbar;
