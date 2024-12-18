import About from "@/components/About";
import Commitment from "@/components/Commitment";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Thumbnail from "@/components/Thumbnail";
import React from "react";

export default function Home() {
  return (
    <div className="  w-[100vw] h-[100vh]">
      <div className="">
        <div className="">
          <Thumbnail />
        </div>

        <div className=" mt-[200px]">
          <Services />
        </div>

        <div className="mt-[200px]">
          <Reviews />
        </div>

        <div className="mt-[200px]">
          <Portfolio />
        </div>

        <div className="mt-[200px]">
          <About />
        </div>

        <div className="mt-[200px]">
          <Commitment />
        </div>
      </div>
    </div>
  );
}
