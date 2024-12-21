import Image from "next/image";

export default function Classicproduct() {
  return (
    <div className="relative bg-[#23856D]  rounded-[5px] top-[2270px] border">
      <div className="w-full h-[799px]">
        <div className="absolute left-[209px] py-[112px] flex gap-[80px] w-[1036px] h-[711px]">
          <div className="flex gap-[30px] w-[1049px] h-[599px]">
            <div className="flex flex-col gap-[30px] pt-[60px] w-[509px] h-[432px]">
              <h4 className="font-Montserrat text-white text-[20px] leading-[30px] font-normal">
                SUMMER 2020
              </h4>
              <h1 className="font-Montserrat text-white text-[58px] leading-[80px] font-bold">
                Vita Classic Product
              </h1>
              <p className="font-Montserrat text-white text-[14px] leading-[20px] font-medium">
                We know how large objects will act, We know how are objects will act, We know
              </p>
              <div className="flex gap-[34px] w-[295px] h-[52px]">
                <h3 className="font-Montserrat text-white text-[24px] leading-[32px] font-bold">
                  $16.48
                </h3>
                <button className="flex gap-[10px] items-center justify-center px-[40px] py-[15px] bg-[#2DC071] text-white rounded-[5px] w-[184px] h-[52px]">
                  <span className="font-Montserrat text-[14px] leading-[22px] font-medium">
                    ADD TO CART
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[510px]">
              <Image
                src="/images/shop-hero-2-png-picture-1.png"
                alt="Vita Classic Product Image"
                width={510}
                height={432}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
