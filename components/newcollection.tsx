import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

const Carousel = () => {
  return (
    <div className="relative w-full h-[716px] mt-4">
      <div className="absolute inset-0">
        <Image src="/images/shop-hero-1-product-slide-1 (1).jpg" alt="Summer Collection" layout="fill" objectFit="cover" />
      </div>

      <div className="absolute lg:ml-[85px]  flex flex-col justify-center items-start gap-8 px-6 lg:px-16 top-[25%] left-[6%] z-10">
        <h5 className="text-white font-semibold text-xl tracking-wider">SUMMER 2020</h5>
        <h1 className="text-white font-semibold text-5xl leading-tight max-w-lg">
          NEW COLLECTION
        </h1>
        <h4 className="text-white text-lg font-normal max-w-md">
          We know how large objects will act,<br/> but things on a small scale.
        </h4>
        <button className="mt-4 px-10 py-3 rounded-md bg-[#2DC071] text-white text-2xl font-semibold">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Carousel;
