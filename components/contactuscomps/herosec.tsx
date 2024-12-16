import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

  export default function Herosec (){
    return ( 
        <div className="lg:w-[1050px] w-[414px] h-[1316px] flex flex-col lg:flex-row  lg:h-[545px]  lg:ml-[150px] pt-[112px] pb-[112px] gap-[80px]">
            <div className="lg:w-[1044px] h-[590px] lg:justify-between justify-center items-center lg:h-[321px] gap-[30px]">
            <div className="lg:w-[599px] h-[321px] gap-[35px]">
            <h5 className="w-[108px] h-[24px] font-bold text-[16px] leading-[24px] lg:ml-0 ml-[140px] flex lg:items-start items-center text-center lg:text-start tracking-[0.1px]" >CONTACT US</h5>
            <h1 className="lg:w-[378px] text-center lg:text-start h-[160px] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42] mt-8 ">Get in touch 
            today!</h1>
            <h4 className="w-[376px] text-center  lg:text-start h-[60px font-normal text-[20px] leading-8 mt-8 text-[#737373]">We know how large objects will act,<br/> 
            but things on a small scale</h4>
            <h3 className="font-bold text-[24px] text-center lg:text-start leading-[24px] tracking-[0.1px] mt-8">Phone ; +451 215 215 </h3>
            <h3 className="font-bold text-[24px] text-center lg:text-start leading-[24px] tracking-[0.1px] mt-4">Fax : +451 215 215</h3>
         
            

    <div className="w-[242px] mt-8 h-[50px] lg:ml-0 ml-[80px] p-[10px] flex gap-[34px] items-center justify-center">
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
            <div className="lg:mt-[-450px] lg:ml-[525px] lg:w-[571px] mt-[250px] lg:h-[821px]"> <img src="/images/contact-us.png" alt="aboutpic" className="w-[650px] h-[650px]" /></div>
             </div>
             
            </div>
           </div>
    )
}