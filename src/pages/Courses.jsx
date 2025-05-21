import React from "react";
import NameInfoBanner from "../components/NameInfoBanner";
import BottomContainer from "../sections/BottomContainer";
import BannerNav from "../components/BannerNav";
import ScrollToTop from "../utils/ScrollToTop";

const Courses = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
      {/* Downloadable Pdf */}
      <div
        id="courses"
        className="courses w-full min-h-max  h-[80vh] lg:h-[90vh] flex flex-col justify-center items-center gap-14 lg:gap-6 mt-10 md:mt-0 lg:pt-32 text-center "
      >
        {/* <span className="text-2xl font-semibold Zilla">VIDEO/PHOTO</span> */}

        <div className="border-black border-2 py-6 rounded-[70px] bg-project-white w-[90%] lg:w-[80%] flex flex-col justify-center items-center gap-5 lg:gap-3 p-10">
          {/* B pharma */}
          <div className="Zilla flex flex-row justify-center items-center gap-10 ">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3022/3022827.png"
                alt=""
                className="h-20"
              />
            </div>

            <div className="">
              <span className="font-bold text-project-red text-xl  lg:text-3xl">
                B-Pharma
              </span>
            </div>

            <div className="">
              <span className="">
                <span className=" font-bold">Eligibility:</span>
                50% Marks in PCB/PCM in 10+2, For SC/ST 45% Marks in PCB/PCM in
                10+2 Duration :
                <span className="text-project-red font-semibold">4 Years</span>
              </span>
            </div>
          </div>
          <div className="w-[90%] h-[2px] bg-gray-400 my-[10px]"></div>

          {/* D pharma */}
          <div className="Zilla flex flex-row justify-center items-center gap-10 ">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4320/4320337.png"
                alt=""
                className="h-20"
              />
            </div>

            <div className="">
              <span className="font-bold text-project-red text-xl  lg:text-3xl">
                D-Pharma
              </span>
            </div>

            <div className="">
              <span className="">
                <span className=" font-bold">Eligibility:</span>
                50% Marks in PCB/PCM in 10+2, For SC/ST 45% Marks in PCB/PCM in
                10+2 Duration :
                <span className="text-project-red font-semibold">4 Years</span>
              </span>
            </div>
          </div>
          <div className="w-[90%] h-[2px] bg-gray-400 my-[10px]"></div>

          {/* D pharma */}
          <div className="Zilla flex flex-row justify-center items-center gap-10 ">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4850/4850909.png"
                alt=""
                className="h-20"
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <div className="">
                <span className="font-bold text-project-red text-xl  lg:text-3xl">
                  G.N.M
                </span>
              </div>
              <div className="w-[90%] h-[2px] bg-gray-400 my-[10px]"></div>
              {/* <span className="font-bold text-project-red text-xl  lg:text-3xl">
                A.N.M
              </span>
              <span className="font-bold text-project-red text-xl  lg:text-2xl">
                B.Sc Nursing
              </span> */}
            </div>

            <div className="">
              <span className="">
                <span className=" font-bold">Eligibility:</span>
                50% Marks in PCB/PCM in 10+2, For SC/ST 45% Marks in PCB/PCM in
                10+2 Duration :
                <span className="text-project-red font-semibold">4 Years</span>
              </span>
            </div>
          </div>
          <div className="w-[90%] h-[2px] bg-gray-400 my-[10px]"></div>
        </div>
      </div>

      {/* NameInfoBanner */}
      <NameInfoBanner />
      {/* banner with buttons */}
      <BannerNav
        buttons={[
          { label: "Admissions", to: "/admissions" },
          { label: "Career", to: "/career" },
        ]}
      />
    </div>
  );
};

export default Courses;
