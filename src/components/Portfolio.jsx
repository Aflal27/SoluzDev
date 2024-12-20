"use client";
import { portfolio } from "@/utils/portfolio";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Portfolio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div id="Portfolio">
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Portfolio
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          Crafting responsive and user-friendly websites tailored to client
          needs. Specializing in modern web technologies to deliver exceptional
          results.
        </p>
      </div>

      <div className=" max-w-6xl mx-auto">
        {isClient && (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}>
            {portfolio.map((port, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <img
                    width={500}
                    className=" object-contain  rounded-md shadow-md"
                    src={port.image}
                    alt="portfolio"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
