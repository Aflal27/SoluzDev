"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating WhatsApp Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition duration-300 transform hover:scale-110 active:scale-95 hover:rotate-3">
        <FaWhatsapp size={30} />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        </span>
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-[300px] bg-white border border-gray-300 shadow-xl rounded-md">
          <div className="flex items-center justify-between bg-green-500 text-white p-3 rounded-t-md">
            <div className="flex items-center gap-2">
              <img
                src="https://i.pinimg.com/736x/83/6f/f2/836ff2ae73729e198e4ca21c161b21d8.jpg"
                alt="SoluzDev"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="text-sm font-bold">SoluzDev</h3>
                <p className="text-xs">Typically replies within 1 hour</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-500">
              ✕
            </button>
          </div>
          <div className="p-3">
            <p className="text-gray-600 text-sm">
              Hello there! 👋 How can we help?
            </p>
          </div>
          <div className="p-3">
            <a
              href="https://wa.me/94750241025?text=Hi,%20I%20need%20help%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg w-full block text-center hover:bg-green-600 transition">
              Start Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
