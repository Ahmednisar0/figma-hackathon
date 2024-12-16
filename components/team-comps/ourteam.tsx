export default function Team() {
    const users = [
      {
        imgSrc: "/images/team-1-user-1.jpg"
      },
      {
        imgSrc: "/images/team-1-user-2.jpg"
      },
      {
        imgSrc: "/images/team-1-user-3.jpg"
      }
    ];
    const users1 = [
        {
          imgSrc: "/images/team-1-user-1 (1).jpg"
        },
        {
          imgSrc: "/images/team-1-user-2 (1).jpg"
        },
        {
            imgSrc: "/images/team-1-user-3 (1).jpg"
        }
      ];
      const users2 = [
        {
            imgSrc: "/images/team-1-user-1 (2).jpg"
        },
        {
            imgSrc: "/images/team-1-user-2 (2).jpg"
        },
        {
            imgSrc: "/images/team-1-user-3 (2).jpg"
        }
      ];
      return (
        <div className="lg:h-[1759px] h-[4180px] w-[414px] ">
          <div className="h-[819px] lg:ml-[195px]  pb-[112px] gap-[112px]"> 
  
            <div className="lg:w-[607px] lg:ml-48 h-[150px] flex flex-col  items-center justify-center">
              <h2 className="font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-[#252B42]">
                Meet Our Team
              </h2>
            </div>
            <div className="lg:w-[1034px] items-center  h-[1200px] lg:h-[383px] gap-[30px] lg:flex-row flex-col flex mt-[70px]">
        
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
      </div><div className="lg:w-[1034px] items-center h-[1200px] lg:h-[383px] gap-[30px] lg:flex-row flex-col flex mt-[70px]">
        
        {users1.map((user, index) => (
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
      </div><div className="lg:w-[1034px] items-center h-[1300px] lg:h-[383px] gap-[30px] lg:flex-row flex-col flex mt-[70px]">
        
        {users2.map((user, index) => (
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
    