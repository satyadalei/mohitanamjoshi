"use client";
import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky left-0 top-0 z-20 border-b bg-[#FCF8F1] shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* --- Logo --- */}
          <div className="flex-shrink-0">
            <a href="/" title="" className="flex">
              {/* <Image
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt="Logo"
                width={100}
                height={32}
              /> */}
              <h1 className="text-xl font-bold">Mohita Namjoshi</h1>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
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
                className="h-6 w-6"
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

          {/* ---- larger screen menu ---- */}
          <div
            className={`hidden lg:flex lg:transform-none lg:items-center lg:space-x-10`}
          >
            {navItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="group/item relative text-base text-black transition-all duration-200 hover:text-opacity-80"
                  href={item.link}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 hidden h-[2px] w-0 bg-black transition-all duration-200 ease-in-out group-hover/item:w-[100%] md:block"></span>
                </Link>
              );
            })}
          </div>

          {/* ---- Small Screen Menu ----- */}
          <div className={`absolute ${menuOpen ? 'left-0' : '-left-[100%]'} top-0 h-screen w-full bg-white/40 backdrop-blur-sm lg:hidden`}>
            <div className="flex h-full w-[50%] min-w-96 flex-col bg-gray-300">
              <div>
                {menuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={toggleMenu}
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
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={toggleMenu}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </div>
              {navItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="group/item relative text-base text-black transition-all duration-200 hover:text-opacity-80"
                    href={item.link}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 hidden h-[2px] w-0 bg-black transition-all duration-200 ease-in-out group-hover/item:w-[100%] md:block"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          <a
            href="#"
            className="hidden items-center justify-center rounded-full bg-black px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 lg:inline-flex"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
