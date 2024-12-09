import Image from "next/image";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-[10px] absolute top-[850px] bg-[#f5f5f5]">
      <div className="w-full max-w-[1050px] flex flex-col gap-[30px] bg-[#FAFAFA] p-[40px]">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
            EDITOR’S PICK
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full flex flex-wrap md:flex-nowrap gap-[30px]">
          {/* Men Image */}
          <div className="relative w-full md:w-[510px] h-[500px]">
            <Image
              src="/images/filter.png" // Updated path
              alt="Men"
              width={510}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-full md:w-[240px] h-[500px]">
            <Image
              src="/images/filter (1).png" // Updated path
              alt="Women"
              width={240}
              height={500}
              className="w-full h-full object-cover"
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
              <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>

          {/* Accessories and Kids Section */}
          <div className="flex flex-col gap-[30px] w-full md:w-[240px]">
            {/* Accessories Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src="/images/filter (2).png" // Updated path
                alt="Accessories"
                width={240}
                height={242}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src="/images/filter (3).png" // Updated path
                alt="Kids"
                width={240}
                height={242}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
