import { founters } from "@/utils/founters";
import React from "react";

export default function Founters() {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
        Founders
      </h1>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
        {founters.map((founter, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-5 flex flex-col items-center transition-transform transform hover:scale-105">
            <img
              className="object-cover rounded-full w-[200px] h-[200px] md:w-40 md:h-40 mb-4 border-4 border-blue-300"
              src={founter.profile}
              alt={founter.name}
            />
            <div className="text-gray-800 text-center">
              <p className="text-xl font-bold">{founter.name}</p>
              <p className="text-sm text-gray-500">{founter.posstion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
