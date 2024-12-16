import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default  function Shop (){
    return (<div>
        <div className="bg-[#FAFAFA] mt-[20px] pl-[195px] h-[92px] pt-[24px] pb-[24px]">
     <div className=" h-[44px] flex justify-between gap-[30px]">
  <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1] w-[63px] h-[32px] ">Shop
  </h3>
<div className="w-[119px] py-[110] flex gap-[15px] mr-[100px] h-[44px]">
    <Link href="/home" className="font-bold text-[14px] tracking-[0.2] leading-[24px] ">Home</Link>
    <MdOutlineKeyboardArrowRight className="w-[30px] h-[25px] ml-[-10px] text-[#BDBDBD]"/>
    <h6 className="font-montserrat font-bold ml-[-10px] text-[#BDBDBD] text-[14px] leading-[24px] tracking-[0.2px] text-center">
  Shop
</h6>

</div>


</div>
</div>
<div className="h-[271px] bg-[#FAFAFA]" > <div className="w-[1088px] h-[271px] ml-[176px] flex gap-[15px] pb-[48px]">
<img src="/images/card-item.png" alt="item" />
<img src="/images/card-item (1).png" alt="item" className="h-[223px] w-[205px]"/>
<img src="/images/card-item (2).png" alt="item" className="h-[223px] w-[205px]"/>
<img src="/images/card-item (3).png" alt="item" className="h-[223px] w-[205px]" />
<img src="/images/card-item (4).png" alt="item" className="h-[223px] w-[205px]" />
</div>
</div>
</div>
    )
}