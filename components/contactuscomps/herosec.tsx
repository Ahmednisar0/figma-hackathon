import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

  export default function Herosec (){
    return ( 
        <div className="w-[1050px] flex  h-[545px]  ml-[150px] pt-[112px] pb-[112px] gap-[80px]">
            <div className="w-[1044px] justify-between h-[321px] gap-[30px]">
            <div className="w-[599px] h-[321px] gap-[35px]">
            <h5 className="w-[108px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px]" >CONTACT US</h5>
            <h1 className="w-[378px] h-[160px] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42] mt-8 ">Get in touch 
            today!</h1>
            <h4 className="w-[376px] h-[60px font-normal text-[20px] leading-8 mt-8 text-[#737373]">We know how large objects will act,<br/> 
            but things on a small scale</h4>
            <h3 className="font-bold text-[24px] leading-[24px] tracking-[0.1px] mt-8">Phone ; +451 215 215 </h3>
            <h3 className="font-bold text-[24px] leading-[24px] tracking-[0.1px] mt-4">Fax : +451 215 215</h3>
         
            

    <div className="w-[242px] mt-8 h-[50px] p-[10px] flex gap-[34px] items-center justify-center">
      <div className="w-[30px] h-[30px] flex items-center justify-center text-[#252B42]">
        <FaTwitter size={30} />
      </div>
      <div className="w-[30px] h-[30px] flex items-center justify-center text-[#252B42]">
        <FaFacebookF size={30} />
      </div>
      <div className="w-[30px] h-[30px] flex items-center justify-center text-[#252B42]">
        <FaInstagram size={30} />
      </div>
      <div className="w-[30px] h-[30px] flex items-center justify-center text-[#252B42]">
        <FaLinkedinIn size={30} />
      </div>
    </div>

        </div>
        <div> 
            <div className="mt-[-450px] ml-[525px] w-[571px] h-[821px]"> <img src="/images/contact-us.png" alt="aboutpic" className="w-[650px] h-[650px]" /></div>
             </div>
             
            </div>
           </div>
    )
}