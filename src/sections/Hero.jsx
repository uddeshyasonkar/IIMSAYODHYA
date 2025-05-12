import React from "react";

const HeroData = [
  {
    id: 1,
    number: "01",
    digits: "160+ Seats",
    title: "160+ Seats",
    description:
      "(D.PHARMA - 60 SEATS  |  B.PHARMA - 100 SEATS) (G.N.M | A.N.M | B.SC NURSING)",
  },
  {
    id: 2,
    number: "02",
    digits: "100 Beds",
    title: "100 Bedded Hospital",
    description:
      "IIMS Hospital – A 100-bed facility committed to excellence in healthcare and medical education.",
  },
  {
    id: 3,
    number: "03",
    digits: "5 Courses",
    title: "5 Courses",
    description: " A.N.M., G.N.M., D. Pharma , B. Pharma, B.Sc Nursing",
  },
];

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero w-full min-h-screen bg-project-white h-[80vh] lg:h-screen flex flex-col gap-14 lg:gap-6 mt-10 md:mt-0 lg:pt-32 text-center"
    >
      <div className="relative h-full w-full flex lg:flex-row flex-col">
        <img
          src="./images/logo.webp"
          alt=""
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:translate-x-[-50%] lg:translate-y-[-50%] h-28 lg:h-40"
        />
        {/* Photo Div */}
        <div className="bg-gray-200 flex-1 flex items-center justify-center overflow-hidden">
          <img
            src="./images/image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Div */}
        <div className="flex-1 flex items-center justify-center Barlow ">
          <div className="p-10 md:p-0 w-full lg:w-[55%] flex flex-col gap-6 items-center justify-center">
            {HeroData.map((data) => (
              <div className="flex justify-center items-center gap-6 ">
                <span className=" text-4xl font-semibold">{data.number}</span>
                <div className="flex flex-col items-start ">
                  <span className="text-lg font-medium">{data.title}</span>
                  <span className="text-left text-sm lg:text-base font-light ">
                    {data.description}
                  </span>
                </div>
              </div>
            ))}

            <div className="relative mt-6">
              <div className="min-w-60 lg:min-w-100 h-12 lg:h-14 rounded-full bg-transparent border-1 flex justify-center items-center gap-10 lg:gap-13 ">
                {HeroData.map((data) => (
                  <span className="text-lg font-semibold ">{data.digits}</span>
                ))}
              </div>
              <div className="absolute -top-1 lg:-top-1.5 -left-1 lg:-left-2 min-w-60 lg:min-w-100 h-12 lg:h-14  rounded-full bg-transparent border-1 flex justify-center items-center gap-13 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
