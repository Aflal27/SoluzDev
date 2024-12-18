"use client";
import React, { useEffect, useState } from "react";
import { reviews } from "@/utils/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ profile, name, rating, comment, designation }) => {
  return (
    <div className=" max-w-4xl mx-auto bg-blue-100 shadow-md rounded-xl p-8 flex flex-col items-center text-center space-y-4">
      {/* Star Rating */}
      <div className="flex justify-center space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            size={30}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-600 leading-relaxed max-w-2xl text-sm md:text-base">
        "{comment}"
      </p>

      {/* User Details */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src={profile}
          alt={name}
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        {designation && (
          <p className="text-sm text-gray-500 font-medium">{designation}</p>
        )}
      </div>
    </div>
  );
};

export default function Reviews() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Success Stories!
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Discover how we've helped businesses achieve their goals through
            innovative solutions and unparalleled support.
          </p>
        </div>

        {/* Swiper Slider */}
        {isClient && (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}>
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...review} designation="CEO & Director" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
