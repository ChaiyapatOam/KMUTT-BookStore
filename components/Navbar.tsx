import React from "react";
import Link from "next/link";


const Navbar = () => {
  return <div>
  <div className="bg-header py-5">
    <img className="h-[50px] px-6" src="/kmutt-logo.png"/>
  </div>
  <div className="bg-navbar text-white font-bold">
    <div className="px-5 py-3">
      <a className="px-1" href="">Home</a>
      <a className="px-3" href="">Check oder</a>
      <a className="px-3" href="">New Student</a>
    </div>
  </div>
  </div>

}

export default Navbar;
