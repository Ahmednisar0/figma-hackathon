import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default  function Herosec (){
    return (
        <div className=" mt-6  bg-[#FAFAFA] h-[1200px]  lg:h-[690px] w-full ">
            <div className="lg:w-[1440px] lg:ml-[195px] h-[92px] py-[24px]">
            <div className="w-[119px] py-[110] lg:ml-0 ml-[130px] flex lg:items-start items-center justify-center lg:justify-start lg:mt-6  gap-[15px] lg:mr-[100px] h-[44px]">
    <Link href="/home" className="font-bold text-[14px] tracking-[0.2] leading-[24px] ">Home</Link>
    <MdOutlineKeyboardArrowRight className="w-[30px] h-[25px] ml-[-10px] text-[#BDBDBD]"/>
    <h6 className="font-montserrat font-bold ml-[-10px] text-[#BDBDBD] text-[14px] leading-[24px] tracking-[0.2px] text-center">
  Shop
</h6>
</div>
<div className="h-[598px]  ">
<div className="lg:w-[1050px] h-[991px] lg:h-[598px] flex-col  flex gap-[30px] lg:flex-row   pb-[48px]">
 <div className="lg:w-[510px] lg:h-[550px] flex flex-col ">
    <img src="/images/single-product-1-cover-2.jpg" alt="" className="lg:w-[506px] w-full h-[450px]" />
    <div className="w-[219px] h-[75px] flex justify-between">
        <img src="/images/single-product-1-thumb-1.jpg" alt="" className="w-[100px] h-[75px] " />
        <img src="/images/single-product-1-thumb-2.jpg" alt="" className="w-[100px] h-[75px] " />
        </div>
 </div>
 <div className="flex flex-col lg:w-[510px] h-[471px]"> 
 <h4 className="w-[156px] text-[#252B42] h-[30px] mt-[11px] ml-[24px] font-montserrat font-[400] text-[20px] leading-[30px] tracking-[0.2px]">
  Floating,Phone
</h4>
<img src="/images/Frame 32.png" alt="" className="h-[24px] ml-[24px] w-[221px] mt-[24px] "/>
<h3 className="w-[108px] text-[#252B42] h-[32px] mt-[40px] ml-[24px] font-montserrat font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-center">
$1,139.33
</h3>

<div className="flex mt-[24px] gap-[5px] ml-[24px]">
<h6 className="text-[#737373] w-[94px] h-[24px] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px]">
Availability  :
</h6>
<h6 className="text-[#23A6F0] w-[60px] h-[24px] font-montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px]">
In Stock 
</h6>
</div>
<p className="w-[271px] lg:w-[464px] text-[#252B42] h-[60px] mt-[24px] ml-[24px] font-montserrat font-[400] text-[14px] leading-[20px] tracking-[0.2px]">
Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent door ENIM RELIT Mollie. 
Excitation venial consequent sent nostrum met.
</p>


<div className="ml-[25px] w-[283px] lg:w-[445px] mt-[50px] border border-[#BDBDBD]"></div>

<img src="/images/product-colors.png" alt="" className="w-[150px] h-[30px] mt-[24px] ml-[24px]"/>
<img src="/images/product-actions.png" alt="" className="w-[298px] h-[44px] mt-[97px] ml-[24px]"/>
 </div>
</div>

</div>

  
</div>

            
        </div>
    )
}