import React from "react";

export default function About() {
  return (
    <div id="About">
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          About Us
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose max-w-4xl p-3">
          Welcome to SoluzDev, a dynamic tech startup from Sri Lanka with over 3
          years of experience delivering exceptional digital solutions. We
          specialize in mobile app development, website and web app development,
          and UI/UX design, tailored to meet the unique needs of our clients. At
          SoluzDev, innovation and quality are at the heart of everything we do.
          Our skilled team combines creativity with cutting-edge technology to
          craft user-friendly, high-performance solutions that drive business
          success. Whether you're a startup seeking to establish your online
          presence or a business looking to enhance user engagement, SoluzDev is
          your trusted partner for turning ideas into impactful digital
          experiences.
        </p>
        <p className=" mt-3">
          Your vision, our expertise - together, we create success.
        </p>
      </div>
    </div>
  );
}
