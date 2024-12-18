import React from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="z-10 bg-gradient-to-r from-white form-10% via-blue-200 to-blue-300 rounded-t-lg shadow-md dark:bg-gray-900  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SoluzDev
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="">
          <div className=" flex flex-col items-center">
            <div className=" flex items-center gap-5 mb-4">
              <a href="#" className="hover:underline">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="hover:underline">
                <FaXTwitter size={30} />
              </a>
              <a href="#" className="hover:underline">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="hover:underline">
                <FaTiktok size={30} />
              </a>
              <a href="#" className="hover:underline">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              SoluzDev™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
