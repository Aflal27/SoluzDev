"use client";
import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-scroll";

export default function Thumbnail() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center mt-[50px] md:mt-[130px] md:p-10 ">
        {/* thumb01 */}
        <div className=" flex-1 mt-10 md:mt-0">
          <div className=" flex flex-col gap-5 mx-[20px]">
            <div className=" text-gray-800 space-y-2">
              <p className=" text-2xl md:text-5xl font-serif">
                Innovative Software
              </p>
              <p className=" text-2xl md:text-5xl font-serif">
                Solutions for Your
              </p>
              <p className=" text-2xl md:text-5xl font-serif">
                Modern Businesses
              </p>
            </div>

            <div className=" text-sm md:text-md text-gray-500 space-y-1">
              <p>Empowering organizations with cutting-edge technology </p>
              <p>to stay ahead in a dynamic world.</p>
            </div>

            <div className="">
              <Button className="" gradientDuoTone="purpleToPink">
                <Link
                  spy={true}
                  to="ContactUs"
                  smooth={true}
                  activeClass="activeClass">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* thumb02 */}
        <div className=" flex-1 ">
          <video className="" autoPlay loop muted src="./videos/v1.mp4"></video>
        </div>
      </div>
    </div>
  );
}
