"use client";
import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className=" shadow-md  z-10 bg-gradient-to-r from-white form-10% via-blue-200 to-blue-300   p-4  flex items-center justify-between rounded-b-xl  ">
      <div className=" ">
        <p>Logo</p>
      </div>

      <div className="  flex items-center gap-3">
        <div className=" hidden md:flex items-center gap-4">
          <Link
            className=" cursor-pointer hover:text-blue-500"
            spy={true}
            to="Intro"
            smooth={true}
            activeClass="activeClass">
            Home
          </Link>
          <Link
            className=" cursor-pointer hover:text-blue-500"
            spy={true}
            to="Price"
            smooth={true}
            activeClass="activeClass">
            Price
          </Link>
          <Link
            className=" cursor-pointer hover:text-blue-500"
            spy={true}
            to="Portfolio"
            smooth={true}
            activeClass="activeClass">
            Portfolio
          </Link>
          <Link
            className=" cursor-pointer hover:text-blue-500"
            spy={true}
            to="About"
            smooth={true}
            activeClass="activeClass">
            About
          </Link>
          <Link
            className=" cursor-pointer hover:text-blue-500"
            spy={true}
            to="WhyUs"
            smooth={true}
            activeClass="activeClass">
            Why Us
          </Link>
        </div>

        <div className="">
          <button className=" rounded-full bg-white px-2 py-1 cursor-pointer hover:bg-gradient-to-r from-blue-500 form-10% via-blue-200 to-blue-300 transition duration-300 hover:scale-110 hover:shadow-lg z-10">
            <Link
              spy={true}
              to="ContectUs"
              smooth={true}
              activeClass="activeClass">
              Contect Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
