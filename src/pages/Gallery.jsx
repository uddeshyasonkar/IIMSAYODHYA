import React from "react";
import NameInfoBanner from "../components/NameInfoBanner";
import BannerNav from "../components/BannerNav";
import BottomContainer from "../sections/BottomContainer";
import ScrollToTop from "../utils/ScrollToTop";
import GalleryCarousel from "../components/GalleryCarousel";

const images = [
  "./images/GalleryImages/galleryc1.webp",
  "./images/GalleryImages/galleryc2.webp",
  "./images/GalleryImages/galleryc3.webp",
  "./images/GalleryImages/galleryc4.webp",
  "./images/GalleryImages/galleryc5.webp",
  "./images/GalleryImages/galleryc6.webp",
];
const Gallery = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
      <div
        id="hero"
        className="hero w-full min-h-max bg-gray-300 h-max lg:h-[90vh] flex flex-col justify-center gap-14 lg:gap-6 mt-10 md:mt-0 pt-23 lg:pt-32 text-center relative"
      >
        {/* <span className="text-2xl font-semibold Zilla">VIDEO/PHOTO</span> */}
        <GalleryCarousel images={images} />
      </div>
      {/* NameInfoBanner */}
      <NameInfoBanner />

      {/* banner with buttons */}
      <BannerNav
        buttons={[
          { label: "Admissions", to: "/admissions" },
          { label: "Contact Us", to: "/contact-us" },
          { label: "Career", to: "/career" },
        ]}
      />
    </div>
  );
};

export default Gallery;
