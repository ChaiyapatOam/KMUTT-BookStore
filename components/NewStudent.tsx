import Image from "next/image";
import React from "react";
import Student from "/public/Student.svg";
const NewStudent = () => {
  return (
    <div className="w-full h-80 bg-header  mx-auto flex justify-center gap-5 items-center py-10 mt-4">
      <div className="">
        <Image src={Student} alt="logo" className="h-60 text-white" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold">New Student?</h1>
        <h2 className="text-3xl text-navbar">Here's a list of nessecary items</h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex px-1 py-1 rounded-full bg-white shadow">
            <a href="#" className="text-header font-bold py-2 px-6">
              Learn more &gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
