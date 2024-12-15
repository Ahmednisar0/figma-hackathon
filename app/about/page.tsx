import Brands from "@/components/aboutcomps/brands";
import Herosec2 from "@/components/aboutcomps/herosec2";
import Herosec3 from "@/components/aboutcomps/herosec3";
import Herosec from "@/components/aboutcomps/herosection";
import Last from "@/components/aboutcomps/lastcomp";
import Team from "@/components/aboutcomps/team";
import Thepic from "@/components/aboutcomps/thepic";
import Footer from "@/components/footer";
import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Import the arrow icon from React Icons

const Navbar = () => {
  return (<div>
    <nav className="w-[1322px] h-[91px] flex items-center ">
      {/* Left Section: Logo */}
      <div className="ml-[150px] flex items-center  space-x-4">
        <div className="w-[187px] h-[58px] flex items-center">
          <h3 className="text-[24px] leading-[32px] font-bold tracking-[0.1px] text-gray-800">
            Bandage
          </h3>
        </div>
      </div>

      {/* Middle Section: Links and Buttons */}
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
    </nav>
    <Herosec />
    <Herosec2 />
    <Herosec3 />
    <Thepic />
    <Team />
    <Brands />
    <Last />
    <Footer/>
    </div>
  );
};

export default Navbar;
