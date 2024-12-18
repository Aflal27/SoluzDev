import { Button } from "flowbite-react";
import React from "react";

export default function Thumbnail() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row mt-[130px] mx-[50px]">
        {/* thumb01 */}
        <div className=" flex-1">
          <div className=" flex flex-col gap-5">
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
                Contect Us
              </Button>
            </div>
          </div>
        </div>

        {/* thumb02 */}
        <div className=" flex-1">Video</div>
      </div>
    </div>
  );
}
