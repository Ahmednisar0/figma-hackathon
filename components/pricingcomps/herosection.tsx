import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default  function Herosec (){
    return (
        <div className="h-[280px]">
           
           <div className="lg:w-[870px] h-[280px] mt-[104px] lg:ml-[265px] lg:p-[50px]">
           <div className="lg:w-[788px] w-full h-[180px] flex flex-col lg:justify-center  items-center">
  
           <h5 className="w-[111px]   text-[#737373] h-[24px]  font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center">
           pricing
</h5>
<h1 className="lg:w-[788px] h-[80px] mt-8  font-bold text-[40px]  lg:text-[58px] leading-[80px] tracking-[0.2px] text-center">
Simple Pricing
</h1>
<div className="w-[119px]  mt-8 flex gap-[15px] h-[44px]">
    <Link href="/home" className="font-bold text-[14px] tracking-[0.2] leading-[24px] ">Home</Link>
    <MdOutlineKeyboardArrowRight className="w-[30px] h-[25px] ml-[-10px] text-[#BDBDBD]"/>
    <h6 className="font-montserrat font-bold ml-[-10px] text-[#BDBDBD] text-[14px] leading-[24px] tracking-[0.2px] text-center">
  Pricing
</h6>

</div>


</div>
  
</div>

        </div>
    )
}