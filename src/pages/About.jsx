import React from "react";
import Notices from "../sections/Notices";
import HeadingDivider from "../components/HeadingDivider";
import ExpandableGrid from "../sections/ExpandableGrid";
import CourseGrid from "../sections/CourseGrid";
import Vision from "../sections/Vision";
import BottomContainer from "../sections/BottomContainer";

const About = () => {
  return (
    <div className="w-full min-h-screen">
      <div
        id="hero"
        className="hero w-full min-h-max bg-gray-300 h-[80vh] lg:h-[90vh] flex flex-col justify-center gap-14 lg:gap-6 mt-10 md:mt-0 lg:pt-32 text-center relative"
      >
        <span className="text-2xl font-semibold Zilla">VIDEO/PHOTO</span>
        <div className="border-black border-2 py-6 rounded-full bg-project-white lg:w-[50%] flex justify-center items-center lg:gap-30 absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="Zilla flex flex-col">
            <span className="font-bold text-3xl">1000+</span>
            <span className="font-semibold text-xl">Students Placed</span>
          </div>
          <div className="Zilla flex flex-col">
            <span className="font-bold text-3xl">100</span>
            <span className="font-semibold text-xl">Bed Hospital</span>
          </div>
          <div className="Zilla flex flex-col">
            <span className="font-bold text-3xl">1000+</span>
            <span className="font-semibold text-xl">Students Placed</span>
          </div>
        </div>
      </div>
      <Notices />
      <HeadingDivider title="FACULTIES" />
      <div className="w-full px-2 sm:px-4 md:px-12 py-10 lg:py-20 ">
        <ExpandableGrid />
      </div>
      <HeadingDivider title="COURSES" />

      <CourseGrid />
      <Vision />
      <BottomContainer />
    </div>
  );
};

export default About;
