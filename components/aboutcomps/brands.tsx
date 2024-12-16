import Brandimages from "../brandimages";

export default function Brands (){
    return (<div className="bg-[#FAFAFA] lg:w-full w-[414px] h-[1444px] lg:h-[479px] " >
         <div className="lg:w-[1050px] h-[479px] lg:ml-[195px] pt-[80px] pb-[80px] gap-[24px]">
         <div className="lg:w-[864px] w-[414px] lg:ml-[70px] h-[120px] gap-[30px] mt-20 flex flex-col items-center justify-center">
            <h2 className="font-bold w-[287px] lg:w-[496px]  h-[150px] lg:h-[50px] text-[50px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
            Big Companies Are Here
            </h2>
            <p className="text-center w-[328px]  lg:w-[547px] mt-2 h-[60px] lg:h-[40px] font-normal text-[14px] leading-[20px] text-[#737373] tracking-[0.2px]">
              Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics
            </p></div>
            <div/><div className="lg:ml-[-200px]">
            <Brandimages  />
         </div>   </div></div>)
}