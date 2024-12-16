import Image from "next/image";

export default  function Images(){
    return (
        <div className="h-[530px] flex gap-[5px]">
            <img src="/images/tailor1.png" className="w-[700px] h-[530px]" alt="" />
            <div className="flex flex-col gap-[5px]">
                <img src="/images/tailor-(2).png" alt=""  width={361} height={260}  className="w-[361px] h-[260px] "/>
                <img src="/images/tailor-(3).png" alt="" width={361} height={260}  className="w-[361px] h-[260px] "/>
                </div>
                <div className="flex flex-col gap-[5px]">
                <img src="/images/tailor.png" alt=""  width={361} height={260}  className="w-[361px] h-[260px] "/>
                <img src="/images/tailor-(4).png" alt="" width={361} height={260} className="w-[361px] h-[260px] "/>
                </div>
        </div>
    )}