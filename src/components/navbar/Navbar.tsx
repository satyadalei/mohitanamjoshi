"use client"
import React, { useState } from 'react';
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#FCF8F1] sticky top-0 left-0">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* --- Logo --- */}
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <Image
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt="Logo"
                width={100}
                height={32}
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

          <div
            className={`lg:flex lg:items-center lg:space-x-10 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#"
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Features
            </a>
            <a
              href="#"
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              Pricing
            </a>
          </div>

          <a
            href="#"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 bg-black rounded-full hover:bg-yellow-300 hover:text-black focus:bg-yellow-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
