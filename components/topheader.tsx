import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export function Hometopheader() {
  return (
    <div className="hidden lg:block w-full h-[58px] bg-[#252B42]">
  <div className="flex justify-between px-[24px] h-full items-center">
    {/* Contact Section */}
    <div className="flex gap-[10px] items-center text-white">
      {/* Phone */}
      <div className="flex gap-[10px] items-center">
        <LuPhone className="w-[16px] h-[16px]" />
        <span
          className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[104px]"
          style={{ letterSpacing: "0.2px" }}
        >
          (225) 555-0118
        </span>
      </div>
      {/* Email */}
      <div className="flex gap-[10px] items-center">
        <TfiEmail className="w-[16px] h-[16px]" />
        <span
          className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[219px]"
          style={{ letterSpacing: "0.2px" }}
        >
          michelle.rivera@example.com
        </span>
      </div>
    </div>

    {/* Message Section */}
    <div className="text-white text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[332px] h-[44px] py-[10px]">
      Follow us and get a chance to win 80% off
    </div>

    {/* Follow Us Section */}
    <div className="flex items-center gap-[10px] text-white w-[233px] h-[46px]">
      {/* Text */}
      <span className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[83px]">
        Follow Us:
      </span>
      {/* Social Media Icons */}
      <div className="flex gap-[10px] items-center">
        <FaYoutube className="w-[16px] h-[16px]" />
        <FaInstagram className="w-[16px] h-[16px]" />
        <FaTwitter className="w-[16px] h-[16px]" />
        <FaFacebookF className="w-[16px] h-[16px]" />
      </div>
    </div>
  </div>
</div>

  
  
  );
}

export function Topheader (){
    return(<div className="hidden  lg:block w-full h-[58px] bg-[#23856D]">
      <div className="flex ml-[190px]  px-[24px] h-full items-center">
        {/* Contact Section */}
        <div className="flex gap-[10px] items-center text-white">
          {/* Phone */}
          <div className="flex gap-[10px] items-center">
            <LuPhone className="w-[16px] h-[16px]" />
            <span
              className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[104px]"
              style={{ letterSpacing: "0.2px" }}
            >
              (225) 555-0118
            </span>
          </div>
          {/* Email */}
          <div className="flex gap-[10px] items-center">
            <TfiEmail className="w-[16px] h-[16px]" />
            <span
              className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[219px]"
              style={{ letterSpacing: "0.2px" }}
            >
              michelle.rivera@example.com
            </span>
          </div>
        </div>
    
        {/* Message Section */}
        <div className="text-white text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[332px] h-[44px] py-[10px]">
          Follow us and get a chance to win 80% off
        </div>
    
        {/* Follow Us Section */}
        <div className="flex items-center   gap-[10px] text-white w-[233px] h-[46px]">
          {/* Text */}
          <span className="font-montserrat  font-bold text-[14px] leading-[24px] tracking-[0.2px] w-[83px]">
            Follow Us:
          </span>
          {/* Social Media Icons */}
          <div className="flex gap-[10px] items-center">
            <FaYoutube className="w-[16px] h-[16px]" />
            <FaInstagram className="w-[16px] h-[16px]" />
            <FaTwitter className="w-[16px] h-[16px]" />
            <FaFacebookF className="w-[16px] h-[16px]" />
          </div>
        </div>
      </div>
    </div>
    )
}