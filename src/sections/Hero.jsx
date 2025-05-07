import React from "react";

const HeroData = [
  {
    id: 1,
    number: "01",
    digits: "113+",
    title: "113+ Companies",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse veniam accusantium fugiat vel impedit aperiam odio harum libero.",
  },
  {
    id: 2,
    number: "02",
    digits: "274K",
    title: "274K Students",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse veniam accusantium fugiat vel impedit aperiam odio harum libero.",
  },
  {
    id: 3,
    number: "03",
    digits: "179+",
    title: "179+ Ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse veniam accusantium fugiat vel impedit aperiam odio harum libero.",
  },
];

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero w-full min-h-screen bg-project-white h-[80vh] lg:h-screen flex flex-col gap-14 lg:gap-6 mt-10 md:mt-0 lg:pt-36 text-center"
    >
      <div className="relative h-full w-full flex lg:flex-row flex-col">
        <img
          src="./images/logocrop.webp"
          alt=""
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:translate-x-[-50%] lg:translate-y-[-50%] h-36 lg:h-60"
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
          <div className="p-10 md:p-0 w-full lg:w-3/6 flex flex-col gap-4 items-center justify-center">
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
              <div className="w-60 lg:w-80 h-12 lg:h-14 rounded-full bg-transparent border-1 flex justify-center items-center gap-10 lg:gap-13 ">
                {HeroData.map((data) => (
                  <span className="text-lg font-semibold">{data.digits}</span>
                ))}
              </div>
              <div className="absolute -top-1 lg:-top-2 -left-1 lg:-left-2 w-60 lg:w-80 h-12 lg:h-14 rounded-full bg-transparent border-1 flex justify-center items-center gap-13 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
