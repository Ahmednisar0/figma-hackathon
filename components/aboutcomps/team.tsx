export default function Team() {
  const users = [
    {
      imgSrc: "/images/user-1.jpg"
    },
    {
      imgSrc: "/images/user-2.jpg"
    },
    {
      imgSrc: "/images/user-3.jpg"
    }
  ];
    return (
      <div className="lg:w-full w-[414px] h-[1427px] lg:h-[826px]">
        <div className="h-[819px] lg:ml-[195px]  lg:pb-[112px] lg:gap-[112px]"> 

          <div className="lg:w-[607px] w-[302px] h-[109px] ml-12 lg:ml-48 lg:h-[150px] flex flex-col items-center justify-center">
            <h2 className=" w-[302px] h-[100px] font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
              Meet Our Team
            </h2>
            <p className="text-center h-[80px]  lg:w-[469px] mt-2 lg:h-[40px] font-normal text-[14px] leading-[20px] text-[#737373] tracking-[0.2px]">
              Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="lg:w-[1034px] h-[1330px] lg:h-[383px] gap-[30px] flex lg:flex-row flex-col  items-center lg:items-start lg:justify-start mt-[70px]">
      
      {users.map((user, index) => (
        <div key={index} className="w-[316px] flex flex-col h-[383px]">
          <img
            src={user.imgSrc}
            alt={`user-${index + 1}`}
            className="w-[316px] h-[231px]"
          />
          <div className="w-[316px] h-[152px] px-[30px] gap-[10px] mt-[30px]">
            <h5 className="text-center font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              Username
            </h5>
            <h5 className="text-center font-bold text-[14px] mt-[10px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Profession
            </h5>
            <div className="flex w-[112px] h-[24px] gap-[20px] mt-[10px] ml-[72px]">
              <img
                src="/images/facebook.png"
                alt="facebook"
                className="w-[24px] h-[24px]"
              />
              <img
                src="/images/insta.png"
                alt="insta"
                className="w-[24px] h-[24px]"
              />
              <img
                src="/images/twiter.png"
                alt="twitter"
                className="w-[24px] h-[24px]"
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
  