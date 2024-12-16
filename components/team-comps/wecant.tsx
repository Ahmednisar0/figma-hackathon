import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
        export default function Wecant() {
            return(<div className="  h-[342px]">
                <div className="lg:w-[607px] w-[414px] lg:ml-[390px] h-[200px] flex flex-col items-center justify-center">
        <h2 className="lg:w-[547px] w-[414px] h-[100px] lg:h-[50px] font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
        Start your 14 days free trial
        </h2>
        <h2 className=" w-[411px]  mt-3 h-[40px] font-normal text-[14px] leading-[20px] text-[#252B42] tracking-[0.2px] text-center">
        Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent.
        </h2>
        <button className=" py-4 flex items-center mt-6  justify-center bg-[#23A6F0] text-white text-[14px] leading-[22px] font-bold tracking-[0.2px] w-[186px] h-[80px] rounded-[5px]">
            <span>Try it free now</span>
          </button>
          <div className="w-[242px] mt-4  h-[90px]  flex gap-[34px] items-center">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center text-[#1DA1F2]">
        <FaTwitter size={30} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center text-[#4267B2]">
        <FaFacebookF size={30} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center text-[#C13584]">
        <FaInstagram size={30} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center text-[#0077B5]">
        <FaLinkedinIn size={30} />
      </a>
    </div>
        </div></div>
            )
        }