import Image from "next/image";

export default function Bestseller() {
  return (
    <div className="w-full absolute top-[1470px] left-0 flex justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-[1124px] py-[80px] flex flex-col gap-[80px] px-4">
        {/* Text Section */}
        <div className="text-center flex flex-col gap-[10px]">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] max-w-[600px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {[
            "/images/product1(1).png",
            "/images/product1(2).png",
            "/images/product1(3).png",
            "/images/product1(4).png",
            "/images/product1(5).png",
            "/images/product1(6).png",
            "/images/product1(7).png",
            "/images/product1(7).png",
          ].map((path, index) => (
            <div
              key={index}
              className="w-full max-w-[238px] flex flex-col mx-auto"
            >
              <Image
                src={path}
                alt={`Product ${index + 1}`}
                width={239}
                height={239}
                className="rounded-md object-cover"
              />
              <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
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
                <div className="w-[82.2px] h-[16px] flex justify-center">
                  <Image
                    src="/images/product-colors.png"
                    alt="colours"
                    width={82.2}
                    height={16}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
