import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" shadow-md  z-10 bg-gradient-to-r from-white form-10% via-blue-200 to-blue-300   p-4  flex items-center justify-between rounded-b-xl  ">
      <div className=" ">
        <p>Logo</p>
      </div>

      <div className="  flex items-center gap-3">
        <div className=" hidden md:flex items-center gap-4">
          <Link href="#">Home</Link>
          <Link href="#">Price</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">About</Link>
          <Link href="#">Why Us</Link>
        </div>

        <div className="">
          <button className=" rounded-full bg-white px-2 py-1">
            Contect Us
          </button>
        </div>
      </div>
    </div>
  );
}
