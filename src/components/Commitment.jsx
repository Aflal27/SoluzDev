import React from "react";

export default function Commitment() {
  return (
    <div>
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Our Commitment
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed md:leading-loose">
          At SoluzDev, our goal is to solve complex problems through innovative
          digital solutions and empower our clients to achieve sustainable
          business growth. By combining technology and creativity, we aim to
          deliver results that drive success and build lasting partnerships
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-blue-100 p-5 rounded-md shadow-md">
        <div className="">
          <p className=" text-gray-700 text-2xl font-semibold">
            Established Trust, Verified Outcomes
          </p>
          <div className=" flex flex-col  gap-10 md:flex-row md:justify-between mt-3">
            <div className="">
              <p className="text-gray-700 text-6xl font-semibold">3+</p>
              <p className=" text-sm">Years Experience</p>
            </div>
            <div className="">
              <p className="text-gray-700 text-6xl font-semibold">50+</p>
              <p className=" text-sm">Success Full Projects</p>
            </div>
            <div className="">
              <p className=" text-gray-700 text-6xl font-semibold">5+</p>
              <p className=" text-sm">Employees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
