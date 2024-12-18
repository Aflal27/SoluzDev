"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import { WebDevolopment, MobileApplication, UIUX } from "@/utils/price";

import "swiper/css";
import "swiper/css/navigation";

export default function Services() {
  const services = ["Web Development", "UI / UX", "Mobile Application"];
  const [isClient, setIsClient] = useState(false);
  const [pickService, setPickService] = useState("Web Development");
  console.log(pickService);

  // Ensure Swiper runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Services & Prices
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-xl">
          A website wireframe, also known as a page schematic or screen
          blueprint,
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-10 p-10">
        {/* Services */}
        <div className="flex flex-col gap-4 w-full lg:w-[280px] bg-white p-2 shadow-md rounded-md">
          {services.map((service, index) => (
            <p
              onClick={() => setPickService(service)}
              key={index}
              className={`bg-blue-100 p-3 rounded-md cursor-pointer hover:bg-blue-200 transition ${
                pickService === service && " bg-blue-300"
              }`}>
              {service}
            </p>
          ))}
        </div>

        {/* Price Cards */}
        <div className="w-full overflow-hidden">
          <div className="">
            {isClient && (
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                  1440: { slidesPerView: 3, spaceBetween: 30 },
                }}
                navigation>
                {pickService === "Web Development" &&
                  WebDevolopment.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}

                {pickService === "Mobile Application" &&
                  MobileApplication.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}

                {pickService === "UI / UX" &&
                  UIUX.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
