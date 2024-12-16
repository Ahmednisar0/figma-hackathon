import Image from "next/image";

export default  function Images(){
    return (
        <div className="lg:h-[530px] h-[1070px] flex lg:flex-row flex-col  gap-[5px]">
            <img src="/images/tailor1.png" className="lg:w-[700px] w-[414px] h-[530px] lg:h-[530px]" alt="" />
            <div className="flex flex-row lg:flex-col   gap-[5px]">
                <img src="/images/tailor-(2).png" alt=""    className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px] "/>
                <img src="/images/tailor-(3).png" alt=""   className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px] "/>
                </div>
                <div className="flex flex-row lg:flex-col gap-[5px]">
                <img src="/images/tailor.png" alt=""  className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px] "/>
                <img src="/images/tailor-(4).png" alt="" className="lg:w-[361px] w-[204px] h-[260px] lg:h-[260px] "/>
                </div>
        </div>
    )}