'use client';

import Link from "next/link";

import { FiArrowRight } from "react-icons/fi"; 
import { useState } from "react";

export default  function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
    };
  
    return (<div>
      <div className="hidden lg:block">
      <nav className="w-[1322px]  h-[91px] flex items-center ">
      {/* Left Section: Logo */}
      <div className="ml-[150px] flex items-center  space-x-4">
        <div className="w-[187px] h-[58px] flex items-center">
          <h3 className="text-[24px] leading-[32px] font-bold tracking-[0.1px] text-gray-800">
            Bandage
          </h3>
        </div>
      </div>

      {/* Middle Section  Links and Buttons */}
      <div className="flex justify-between items-center w-full ml-[40px] mr-[30px]">
        {/* Links */}
        <div className="flex items-center space-x-[21px]">
          {["Home", "Product", "Pricing", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[14px] leading-[24px] font-bold tracking-[0.2px] text-[#737373] hover:text-gray-900"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Login and Button */}
        <div className="flex items-center mr-[120px] space-x-[45px]">
          <a
            href="#login"
            className="text-[14px] leading-[22px] font-bold tracking-[0.2px] text-[#23A6F0] hover:text-blue-700"
          >
            Login
          </a>
          <button className="flex items-center  justify-center bg-[#23A6F0] text-white text-[14px] leading-[22px] font-bold tracking-[0.2px] w-[214px] h-[52px] rounded-[5px]">
            <span>Become a member</span>
            {/* React Icon */}
            <FiArrowRight className="ml-[8px] w-[16px] h-[16px]" />
          </button>
        </div>
      </div>
     

     
    </nav></div>
    <div className="lg:hidden block">
    <div
    className={`fixed top-0 left-0 w-full bg-white p-6 flex flex-col items-center gap-4 ${
      isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    }`}
  >
    <ul className="text-black text-[16px] font-semibold flex flex-col gap-4 items-center">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/shop">Shop</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      
    </ul>
    <button
      onClick={toggleMenu}
      className="text-black mt-4 font-bold underline"
    >
      Close Menu
    </button>
  </div> </div>
  </div>
    )
}