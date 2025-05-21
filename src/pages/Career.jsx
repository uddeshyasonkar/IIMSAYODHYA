import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import NameInfoBanner from "../components/NameInfoBanner";
import Vision from "../sections/Vision";
import BottomContainer from "../sections/BottomContainer";
import GalleryCarousel from "../components/GalleryCarousel";

const Career = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
      {" "}
      <div
        id="hero"
        className="hero w-full min-h-max bg-gray-300 h-[80vh] lg:h-[90vh] flex flex-col justify-center gap-14 lg:gap-6 mt-10 md:mt-0 lg:pt-32 text-center relative"
      >
        Career
      </div>
      {/* NameInfoBanner */}
      <NameInfoBanner />
      {/* Vision text */}
      <Vision
        heading="IIMS and Indian Hospital"
        content="IIMS and Indian Hospital is committed to enhancing the educational opportunities for dedicated professionals like you who have a requisite degree in Early Childhood Care & Education and are keen to be a part of the unique IIMS and Indian Hospital culture.IIMS and Indian Hospital professionals enjoy careers that are both challenging and rewarding. Everything IIMS and Indian Hospital does is intentional, deeply rooted in the foundation of its Mission, Values, Purpose, and Service culture. IIMS and Indian Hospital’s commitment to lifetime learning extends to its employees through supporting its staff in their individual and professional development.IIMS and Indian Hospital offers education assistance programs, professional development programs, regular faculty training programs and numerous ongoing career development opportunities."
      />
      <GalleryCarousel />
    </div>
  );
};

export default Career;
