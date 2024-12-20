"use client";
import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="shadow-md z-10 bg-gradient-to-r from-white via-blue-200 to-blue-300 p-4 flex items-center justify-between rounded-b-xl">
      {/* Logo */}
      <div title="Logo">
        <p className="text-xl font-bold cursor-pointer hover:text-blue-500 transition">
          Logo
        </p>
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-4">
          <Link
            className="cursor-pointer hover:text-blue-500 transition"
            spy={true}
            to="Intro"
            smooth={true}
            activeClass="activeClass">
            Home
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-500 transition"
            spy={true}
            to="Price"
            smooth={true}
            activeClass="activeClass">
            Price
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-500 transition"
            spy={true}
            to="Portfolio"
            smooth={true}
            activeClass="activeClass">
            Portfolio
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-500 transition"
            spy={true}
            to="About"
            smooth={true}
            activeClass="activeClass">
            About
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-500 transition"
            spy={true}
            to="WhyUs"
            smooth={true}
            activeClass="activeClass">
            Why Us
          </Link>
        </div>

        {/* Contact Us Button */}
        <div>
          <button
            className="rounded-full bg-white px-4 py-2 cursor-pointer hover:bg-gradient-to-r from-blue-500 via-blue-200 to-blue-300 transition duration-300 hover:scale-110 hover:shadow-lg z-10"
            aria-label="Contact Us">
            <Link
              spy={true}
              to="ContactUs"
              smooth={true}
              activeClass="activeClass">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
