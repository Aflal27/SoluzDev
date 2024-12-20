"use client";
import React, { useState } from "react";

export default function Contect() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div
      id="ContactUs"
      className="  flex flex-col gap-5 md:flex-row items-center p-5 justify-center mx-auto max-w-5xl ">
      {/* Left */}
      <div className="flex flex-col w-full">
        <span className="text-6xl font-semibold text-slate-600">
          Get in touch
        </span>

        <span className="text-blue-300 text-5xl font-semibold">Contact me</span>
      </div>

      {/* Right */}
      <div className="w-full">
        <div className="flex flex-col gap-5">
          <input
            className="border-2 border-blue-400 max-w-sm w-full p-2 rounded-lg outline-none z-10"
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
          />
          <input
            className="border-2 border-blue-400 max-w-sm w-full p-2 rounded-lg outline-none z-10"
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <textarea
            className="border-2 border-blue-400 max-w-sm w-full p-2 rounded-lg outline-none z-10"
            placeholder="Message"
            id="message"
            onChange={handleChange}
          />
          <a
            href={`mailto:${form.email}?subject=Regarding ${form.name}&body=${form.message}`}
            className="z-10">
            <button className=" rounded-md shadow-md bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 hover:opacity-50 button uppercase w-20 h-8 self-center">
              Send
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
