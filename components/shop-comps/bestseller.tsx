import Image from "next/image";

export default  function Bestsellers (){
  return (<div>
        <div className=" h-[4000px] lg:pl-[40px] bg-[#FAFAFA] lg:h-[1086px] "><div className="grid lg:items-start items-center ml-20 w-[414px] lg:ml-[158px] lg:w-[1124px]  lg:h-[1086px]   grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {/* Product Cards */}
        {[
       
         "/images/product-cover-5 (20).png",
          "/images/product-cover-5 (21).png",
          "/images/product-cover-5 (22).png",
          "/images/product-cover-5 (23).png",
          "/images/product-cover-5 (24).png",
          "/images/product-cover-5 (25).png",
          "/images/product-cover-5 (26).png",
          "/images/product-cover-5 (21).png",
          
        ].map((path, index) => (
          <div
            key={index}
            className="w-full max-w-[238px] flex flex-col "
          >
            <Image
              src={path}
              alt={`Product ${index + 1}`}
              width={239}
              height={300}
              className="rounded-md object-cover"
            />
            <div className="w-[239px] bg-white h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
              <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
                Graphic Design
              </h5>
              <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
                English Department
              </p>
              <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
                  $16.48
                </h5>
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                  $6.48
                </h5>
              </div>
             
            </div>
          </div>
        ))}
      </div> </div>
      </div>
    )
}