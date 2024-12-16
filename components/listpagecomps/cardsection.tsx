import Image from "next/image";

        export default  function Cardsec (){
            return ( <div><div className=" h-[1778px] mt-[450px]"><div className="grid ml-[158px] w-[1124px] h-[1778px]  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
                {/* Product Cards */}
                {[
                  "/images/product-cover-5.png",
                 "/images/product-cover-5 (1).png",
                  "/images/product-cover-5 (2).png",
                  "/images/product-cover-5 (3).png",
                  "/images/product-cover-5 (4).png",
                  "/images/product-cover-5 (5).png",
                  "/images/product-cover-5 (6).png",
                  "/images/product-cover-5 (7).png",
                  "/images/product-cover-5 (8).png",
                  "/images/product-cover-5 (9).png",
                  "/images/product-cover-5 (10).png",
                  "/images/product-cover-5 (11).png",
                 
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
              </div> </div>
              <div className="flex justify-center" > <img src="/images/ul.png" alt="ul" /></div>
              </div>)
        }