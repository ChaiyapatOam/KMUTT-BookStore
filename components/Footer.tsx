import React from "react";

const Footer = () => {
  return <div>
    <div className="bg-header mt-2 px-5 text-white flex">
      <div className="flex-1 p-6">
        <img className="h-[60px] pl-4" src="/kmutt-logo.png"/>
        <div className="px-4 py-6">
        91 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140. Thailand
        </div>
      </div>
      <div className="flex flex-col flex-1 pt-[50px] text-center ">
        <a className="pb-3 font-bold text-2xl" href="">Support</a>
        <a className="py-3" href="">FAQ</a>
        <a className="py-3" href="">Privacy</a>
        <a className="py-3" href="">Cookie</a>
        <a className="py-3" href="">Term</a>
      </div>
      <div className="flex flex-col flex-1 pt-[50px] text-center">
        <div className="font-bold pb-3 text-2xl">Company</div>
        <div className="flex">
          <img className="ml-[125px] my-2 w-8 h-8" src="/Facebook-Logo.png"/>
          <a className="uppercase py-3 mx-3" href="">kmutt book store</a>
        </div>
        
      </div>
    </div>
  </div>;
};

export default Footer;
