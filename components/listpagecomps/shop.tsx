import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default  function Shop (){
    return (<div>
        <div className="bg-[#FAFAFA] mt-[20px] lg:pl-[195px] h-[202px] lg:h-[92px]  pt-[24px] pb-[24px]">
     <div className=" h-[44px] lg:mt-0 mt-12 flex lg:flex-row flex-col justify-center items-center lg:justify-between gap-[30px]">
  <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1] w-[63px] h-[32px] ">Shop
  </h3>
<div className="w-[119px] py-[110] flex lg:mt-6  gap-[15px] lg:mr-[100px] h-[44px]">
    <Link href="/home" className="font-bold text-[14px] tracking-[0.2] leading-[24px] ">Home</Link>
    <MdOutlineKeyboardArrowRight className="w-[30px] h-[25px] ml-[-10px] text-[#BDBDBD]"/>
    <h6 className="font-montserrat font-bold ml-[-10px] text-[#BDBDBD] text-[14px] leading-[24px] tracking-[0.2px] text-center">
  Shop
</h6>

</div>


</div>
</div>
<div className="h-[1628px] w-[414px] lg:h-[271px] bg-[#FAFAFA]" > <div className="lg:w-[1088px] lg:h-[271px] lg:ml-[176px] lg:items-start items-center  flex lg:flex-row flex-col gap-[15px] pb-[48px]">
<img src="/images/card-item.png" alt="item" className="lg:h-[223px] w-[332px] h-[300px] lg:w-[205px]" />
<img src="/images/card-item (1).png" alt="item" className="lg:h-[223px] w-[332px] h-[300px] lg:w-[205px]"/>
<img src="/images/card-item (2).png" alt="item" className="lg:h-[223px] w-[332px] h-[300px] lg:w-[205px]"/>
<img src="/images/card-item (3).png" alt="item" className="lg:h-[223px] w-[332px] h-[300px] lg:w-[205px]" />
<img src="/images/card-item (4).png" alt="item" className="lg:h-[223px] w-[332px] h-[300px] lg:w-[205px]" />
</div>
</div>
</div>
    )
}