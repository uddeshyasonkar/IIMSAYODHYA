import React from "react";
import Hero from "../sections/Hero";
import Notices from "../sections/Notices";
import HeadingDivider from "../components/HeadingDivider";
import Modules from "../sections/Modules";
import CampusLife from "../sections/CampusLife";
import Addressal from "../sections/Addressal";
import BottomContainer from "../sections/BottomContainer";
import ScrollToTop from "../utils/ScrollToTop";

const Home = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Notices />
      <HeadingDivider title="DOWNLOAD PROSPECTUS" />
      <Modules />
      <CampusLife />
      <Addressal />
    </div>
  );
};

export default Home;
