import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function Card({ data }) {
  return (
    <div>
      <div className="w-[300px] h-[600px] bg-blue-100 p-4 rounded-xl shadow-sm">
        {/* Title and Price */}
        <div className="w-[250px] md:w-full h-[80px] bg-white rounded-xl text-gray-600 px-5 py-1">
          <p className="font-serif text-lg">{data.name}</p>
          <p className="text-2xl">{data.price} LKR</p>
        </div>

        {/* Description */}
        <div className="text-gray-500 py-5 px-2">{data?.description}</div>

        {/* Plan Features */}
        <div className="flex flex-col gap-8 mt-3 text-gray-600 text-base p-2">
          {data.plan.map((p, index) => (
            <div className="flex items-center gap-1" key={index}>
              <FaCheck className="text-green-600" />
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
