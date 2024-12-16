export default function Herosec (){
    return ( 
        <div className="lg:w-[1050px] w-[414px] h-[1250px] flex lg:flex-row  flex-col  lg:h-[545px]  lg:ml-[150px] pt-[112px] pb-[112px] gap-[80px]">
            <div className="lg:w-[1044px]   lg:items-start ju lg:justify-between h-[321px] gap-[30px]">
            <div className="lg:w-[599px] h-[321px] w-[414px]  flex-col items-center justify-center gap-[35px]">
            <h5 className="w-[149px]  h-[24px] font-bold text-[16px] leading-[24px] text-center lg:text-start lg:ml-0 ml-28  tracking-[0.1px]" >ABOUT COMPANY</h5>
            <h1 className="lg:w-[542px] h-[80px] font-bold text-[58px] leading-[80px] text-center lg:text-start lg:ml-0 tracking-[0.2px] text-[#252B42] mt-8 ">ABOUT US</h1>
            <h4 className="hidden lg:block w-[376px] h-[60px] font-normal text-[20px] leading-8 mt-8 text-center lg:text-start  text-[#737373]">We know how large objects will act,<br/> 
            but things on a small scale</h4>
            <h4 className="w-[277px] lg:hidden block h-[120px] font-normal text-[20px] ml-14 leading-8 mt-8 text-center lg:text-start  text-[#737373]">
            We know how large 
objects will act, but things 
on a small scale just do 
not act that way.</h4>
            <button className="flex items-center mt-6 lg:ml-0 ml-24  justify-center bg-[#23A6F0] text-white text-[14px] leading-[22px] font-bold tracking-[0.2px] w-[195px] h-[52px] rounded-[5px]">
            <span>Get Qoute Now</span>
          </button>
         
    
        </div>
        <div> 
            <div className="lg:mt-[-450px] lg:ml-[525px] w-[387px] h-[440px] lg:w-[632px] pt-[300px] lg:pt-0 lg:h-[612px]"> <img src="/images/aboutpic.png" alt="aboutpic" className="w-[387px] h-[440px] lg:w-[632px] lg:h-[612px]" /></div>
             </div>
            </div>
           </div>
    )
}