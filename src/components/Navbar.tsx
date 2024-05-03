import Link from "next/link";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Experience", link: "/experience" },
    { label: "Contact", link: "/contact" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
  ];
  
  return (
    <div className="h-14 w-full fixed flex justify-center items-center p-4 backdrop-blur-md border-b border-white/15 md:border-white/20 z-20">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl  font-bold">Mohita Namjoshi</h1>
        <div className="hidden">
          {navItems.map((item) => {
            return (
              <Link className="mr-2 ml-2 font-light text-white/70 hover:text-white" href={item.link} key={item.label}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block border border-white/50 p- rounded-sm ml-2 mr-2 p-1" >
          <form action="" className="h-full w-full flex justify-center items-center">
            <label htmlFor="Search" className="mr-2" ><IoSearchSharp className="opacity-20" /></label>
            <input autoComplete="off" className="outline-none bg-transparent bg-none text-white/70" type="text" name="search" id="" />
          </form>
        </div>

        <div className="hidden sm:flex mr-2 sm:mr-0" >
           <FaLinkedin className="text-3xl mr-3 cursor-pointer" /> <FaInstagram className="text-3xl cursor-pointer" />
        </div>

 
        <div className="hidden sm:flex justify-center items-center" ><MdAccountCircle className="text-3xl md:mr-2" /> Login</div>
       <GiHamburgerMenu className="text-3xl md:hidden cursor-pointer" /> 
      </div>
    </div>
  );
};

export default Navbar;
