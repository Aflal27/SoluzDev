import About from "@/components/About";
import Commitment from "@/components/Commitment";
import Footer from "@/components/Footer";

import Founters from "@/components/Founters";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Thumbnail from "@/components/Thumbnail";
import Why from "@/components/Why";
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

        <div className="mt-[250px]">
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

        <div className="mt-[200px]">
          <Founters />
        </div>

        <div className="mt-[200px]">
          <Why />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
