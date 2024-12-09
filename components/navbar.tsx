'use client';

import { PiCaretDownBold } from "react-icons/pi";
import { BsSearch, BsHeart, BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <nav className="w-full bg-white flex items-center px-4 md:px-8 lg:px-16">
      {/* Brand Section */}
      <div className="flex lg:mt-4 items-center">
        <h3 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">
          Bandage
        </h3>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden  lg:mt-4 lg:flex flex-1 justify-center gap-[15px]">
        <a
          href="#home"
          className="text-[#737373] font-bold hover:text-[#252B42] transition"
        >
          Home
        </a>
        <div className="flex items-center gap-[5px]">
          <a
            href="#shop"
            className="text-[#252B42] font-medium hover:underline"
          >
            Shop
          </a>
          <PiCaretDownBold className="text-[#252B42]" />
        </div>
        <a
          href="#about"
          className="text-[#737373] font-bold hover:text-[#252B42]"
        >
          About
        </a>
        <a
          href="#blog"
          className="text-[#737373] font-bold hover:text-[#252B42]"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="text-[#737373] font-bold hover:text-[#252B42]"
        >
          Contact
        </a>
        <a
          href="#pages"
          className="text-[#737373] font-bold hover:text-[#252B42]"
        >
          Pages
        </a>
      </div>

      {/* Desktop Right Section */}
      <div className="hidden lg:mt-4 lg:flex gap-4 items-center">
        <div className="flex items-center gap-[5px]">
          <FaRegUser className="text-[#23A6F0]" />
          <a href="#login" className="text-[#23A6F0] font-bold">
            Login / Register
          </a>
        </div>
        <BsSearch className="text-[#23A6F0] cursor-pointer" />
        <div className="flex items-center gap-[5px]">
          <BsCart2 className="text-[#23A6F0]" />
          <span className="text-[#23A6F0] text-[12px]">1</span>
        </div>
      
      <div className="flex items-center gap-[5px]">
          <BsHeart className="text-[#23A6F0]" />
          <span className="text-[#23A6F0] text-[12px]">1</span>
        </div></div>
      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <div className="lg:hidden flex flex-1 justify-end gap-[24px] items-center ">
        {/* Search Icon */}
        <BsSearch className="text-[#252B42] w-[24px] h-[24px]" />
        {/* Cart Icon */}
        <div className="flex items-center">
          <BsCart2 className="text-[#252B42] w-[24px] h-[24px]" />
         
        </div>
        {/* Hamburger Icon (Menu) */}
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-white p-6 flex flex-col items-center gap-4 z-50 transition-all duration-300 ease-in-out ${
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
      </div>
    </nav>
  );
}
