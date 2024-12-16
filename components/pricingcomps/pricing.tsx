import Brandimages from "../brandimages";

export default function Pricing() {
    return( <div>
        <div className="hidden lg:block h-[1462px] bg-[#FAFAFA]"> 
         <div className="flex justify-center pt-[100px] items-center flex-col "> 
            <h2 className="w-[144px] h-[50px]  font-bold text-[40px] leading-[50px] tracking-[0.2px]">
         Pricing
</h2>
<p className="w-[469px] mt-4 text-[#737373] h-[40px]  font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center">
Problems trying to resolve 
the conflict between <br/> the two major 
realms of Classical physics: 
Newtonian mechanics 
</p>
<img src="/images/switch.png" alt="" className="w-[311px] mt-10 h-[44px]" />
 <div className="flex mt-[100px] className= w-[985px] h-[704px]">
    
    <img src="/images/col-md-4.png" alt="" className="w-[337px] mt-[40px] h-[664px]" />
    <img src="/images/col-md-4 (1).png" alt="" className="h-[704px]" />
    <img src="/images/col-md-4 (2).png" alt=""  className="mt-[40px] w-[337px] h-[664px]" />
 </div>
 <h4 className="w-[385px] text-[#252B42] h-[30px] pt-[180px] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center">
 Trusted By Over 4000 Big Companies
</h4>
 </div>
 <Brandimages />

        </div>
        <div>
        <div className=" lg:hidden block h-[4000px] lg:h-[1362px] w-[414px] bg-[#FAFAFA]"> 
         <div className="flex justify-center pt-[100px] items-center flex-col "> 
            <h2 className="w-[144px] h-[50px]  font-bold text-[40px] leading-[50px] tracking-[0.2px]">
         Pricing
</h2>
<p className="lg:w-[469px] w-[262px] mt-4 text-[#737373] h-[80px] lg:h-[40px]  font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center">
Problems trying to resolve 
the conflict between <br/> the two major 
realms of Classical physics: 
Newtonian mechanics 
</p>
<img src="/images/switch.png" alt="" className="w-[311px] mt-[20px] h-[44px]" />
 <div className="lg:flex flex flex-col justify-center items-center lg:mt-[100px] className= w-[985px] h-[2551px]">
    
    <img src="/images/col-md-4.png" alt="" className="w-[337px] lg:mt-[40px] h-[664px]" />
    <img src="/images/col-md-4 (1).png" alt="" className="mt-[40px] h-[704px]" />
    <img src="/images/col-md-4 (2).png" alt=""  className="mt-[40px] w-[337px] h-[664px]" />
 </div>
 <h4 className="w-[385px] text-[#252B42] h-[60px] lg:h-[30px] lg:pt-[180px] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center">
 Trusted By Over 4000 Big Companies
</h4>
 </div>

<Brandimages />   
        </div>
      </div>
        </div>
    )
}
