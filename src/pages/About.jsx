import React from "react";
import Notices from "../sections/Notices";
import HeadingDivider from "../components/HeadingDivider";
import ExpandableGrid from "../sections/ExpandableGrid";
import CourseGrid from "../sections/CourseGrid";
import Vision from "../sections/Vision";
import BottomContainer from "../sections/BottomContainer";
import NameInfoBanner from "../components/NameInfoBanner";
import CampusLife from "../sections/CampusLife";
import BannerNav from "../components/BannerNav";
import ScrollToTop from "../utils/ScrollToTop";

const About = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
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
      {/* <Notices /> */}
      <NameInfoBanner />
      {/* <HeadingDivider title="FACULTIES" /> */}
      {/* <div className="w-full px-2 sm:px-4 md:px-12 py-10 lg:py-20 ">
        <ExpandableGrid />
      </div> */}
      {/* <HeadingDivider title="COURSES" /> */}

      <CourseGrid />
      <Vision
        heading="OUR VISION"
        content=" Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like)."
      />
      {/* <BannerNav bgImg="https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}

      <BannerNav
        bgImg="https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg"
        buttons={[
          { label: "Admissions", to: "/admissions" },
          { label: "Career", to: "/career" },
        ]}
      />
      <CampusLife />
    </div>
  );
};

export default About;
