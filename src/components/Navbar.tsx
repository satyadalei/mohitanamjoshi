"use client"
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Experience", link: "/experience" },
    { label: "Contact", link: "/contact" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
  ];

  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <div className="h-14 fixed top-10 lg:top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center backdrop-blur-md border-b border-white/15 md:border-white/20 z-20 bg-white/85 rounded-2xl pl-3 pr-3 w-[95%] lg:w-[98%] text-black">
      <div className="w-full flex items-center justify-between">
        <h1 className="md:w-[20%] text-sm lg:text-lg font-semibold mr-5">
          Mohita Namjoshi
        </h1>

        {/* -- Hidden tab --  */}
        <div className={`bg-white rounded-tr-[30px] rounded-br-[20px] lg:rounded-tr-none w-[100%] h-[90vh] overflow-y-scroll lg:overflow-auto lg:h-auto absolute top-16 ${toggleNav ? "active-navigation" : "closed-navigation"} lg:static lg:bg-transparent lg:flex lg:items-center lg:w-[80%] justify-between pl-5 pt-5 lg:pt-0 lg:pl-0 pb-20 lg:pb-0`}>
          
          <div className="lg:flex flex flex-col lg:flex-row lg:items-center justify-start">
            {navItems.map((item) => {
              return (
                <Link className="lg:mr-2 lg:ml-2 mt-2 mb-2 font-bold text-gray-600 w-fit" href={item.link} key={item.label}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block border border-black/50 h-8 rounded-sm ml-2 p-1">
            <form
              action=""
              className="w-full flex justify-center items-center"
            >
              <label htmlFor="Search" className="mr-2">
                <IoSearchSharp className="opacity-20" />
              </label>
              <input
                autoComplete="off"
                className="outline-none bg-transparent bg-none text-white/70"
                type="text"
                name="search"
                id=""
              />
            </form>
          </div>

          <div className="flex items-center mr-2 sm:mr-0 mt-5 lg:mt-0">
            <FaLinkedin className="text-2xl lg:text-xl mr-3 lg:mr-2 cursor-pointer" />
            <FaInstagram className="text-2xl lg:text-xl cursor-pointer" />
          </div>

          <div className="flex flex-row lg:justify-center items-center cursor-pointer mt-5 lg:mt-0">
            <MdAccountCircle className="text-3xl lg:text-2xl mr-1" /> Login
          </div>
          
        </div>

        {/* -- for small screen only showed on nav bar-- */}
        {!toggleNav && <div className="lg:hidden flex items-center mr-2 sm:mr-0">
          <FaLinkedin className="text-2xl mr-3 cursor-pointer" />
          <FaInstagram className="text-2xl cursor-pointer" />
        </div>}

        <div className="lg:hidden cursor-pointer flex items-center">
          {!toggleNav && <IoSearchSharp className="opacity-20 text-3xl mr-2" />}
          {toggleNav ? 
            <MdClose onClick={()=> setToggleNav((prev)=> !prev)} className="text-3xl" /> : <GiHamburgerMenu onClick={()=> setToggleNav((prev)=> !prev)} className="text-3xl" />
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
