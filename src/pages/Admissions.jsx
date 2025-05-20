import React from "react";
import NameInfoBanner from "../components/NameInfoBanner";
import CourseGrid from "../sections/CourseGrid";
import BottomContainer from "../sections/BottomContainer";
import ScrollToTop from "../utils/ScrollToTop";

const Admissions = () => {
  ScrollToTop();
  return (
    <div id="admissions" className="w-full min-h-screen">
      {/* Downloadable Pdf */}
      <div
        id="hero"
        className="hero w-full min-h-max bg-gray-300 h-[80vh] lg:h-[90vh] flex flex-col justify-center gap-14 lg:gap-6 mt-10 md:mt-0 lg:pt-32 text-center relative"
      >
        <span className="text-2xl font-semibold Zilla">VIDEO/PHOTO</span>

        <div className="border-black border-2 py-6 rounded-full bg-project-white w-[90%] lg:w-[50%] flex justify-center items-center gap-5 lg:gap-30 absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="Zilla flex flex-col">
            <span className="font-bold text-xl lg:text-3xl">1000+</span>
            <span className="font-semibold text-sm lg:text-xl">
              Students Placed
            </span>
          </div>
          <div className="Zilla flex flex-col">
            <span className="font-bold text-xl lg:text-3xl">100</span>
            <span className="font-semibold text-sm lg:text-xl">
              Bed Hospital
            </span>
          </div>
          <div className="Zilla flex flex-col">
            <span className="font-bold text-xl lg:text-3xl">1000+</span>
            <span className="font-semibold text-sm lg:text-xl">
              Students Placed
            </span>
          </div>
        </div>
      </div>

      {/* NameInfoBanner */}
      <NameInfoBanner />
      {/* Courses Offered */}
      <CourseGrid />
    </div>
  );
};

export default Admissions;
