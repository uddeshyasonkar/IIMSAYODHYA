import React from "react";
import Partners from "../components/Partners";
import Notices from "../components/Notices";
import LinksSection from "../components/LinksSection";

const BottomContainer = () => {
  return (
    <div
      id="bottomContainer"
      className="bottomContainer bg-gradient-to-b from-project-sec-red to-white  py-20  w-full h-max  flex flex-col items-center justify-center gap-14 lg:gap-16 text-center bg"
    >
      <Partners />
      {/* <Notices /> */}
      <LinksSection />
    </div>
  );
};

export default BottomContainer;
