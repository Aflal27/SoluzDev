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
      </div>
    </div>
  );
}
