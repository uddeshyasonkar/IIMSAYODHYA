import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import NameInfoBanner from "../components/NameInfoBanner";
import Vision from "../sections/Vision";
import BottomContainer from "../sections/BottomContainer";
import GalleryCarousel from "../components/GalleryCarousel";
import CareerForm from "../components/CareerForm";

const images = [
  "./images/carousel/1.jpg",
  "./images/carousel/3.jpg",
  // "./images/carousel/4.jpg",
  "./images/carousel/7.jpg",
  "./images/carousel/8.jpg",
  "./images/carousel/9.jpg",
  "./images/carousel/10.jpg",
];

const Career = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
      {" "}
      <div
        id="hero"
        className="hero w-full min-h-max bg-project-white h-[80vh] lg:h-[90vh] flex flex-col  justify-center items-center gap-14 lg:gap-6 mt-10 md:mt-0 pt-20 lg:pt-32 text-center relative"
      >
        {/* mt-30 lg:mt-15 */}
        <div className="lg:w-3/5 p-8 flex flex-col items-center gap-5">
          <h2 className="Zilla text-project-red text-xl lg:text-2xl font-bold">
            Careers at IIMS and Indian Hospital
          </h2>

          <p className="text-justify Zilla text-base lg:text-xl">
            At IIMS and Indian Hospital, we are committed to empowering
            professionals with a background in Early Childhood Care & Education
            who are eager to grow within our distinctive culture. Our team
            members experience meaningful careers rooted in purpose, values, and
            a strong service ethic.
          </p>
          <p className="text-justify Zilla text-base lg:text-xl">
            We believe in lifelong learning and support our staff with a range
            of development opportunities, including:
            <ul className="list-disc list-inside text-left Zilla text-base lg:text-xl">
              <li>Education assistance programs</li>
              <li>Professional development initiatives</li>
              <li>Regular faculty training</li>
              <li>Ongoing career advancement support</li>
            </ul>
          </p>
          <br />
          <p className="Zilla font-semibold text-base lg:text-xl">
            Join us and be part of an environment where your growth is as
            important as the care you provide.
          </p>
        </div>
      </div>
      {/* NameInfoBanner */}
      <NameInfoBanner />
      <div className="lg:w-3/5 w-full mx-auto flex flex-col items-center gap-0 lg:gap-10 py-10">
        <div className="w-full Barlow text-xl flex flex-col gap-2 lg:gap-2 text-center">
          <h2 className="Zilla text-project-red text-xl lg:text-2xl font-bold">
            Career Form
          </h2>
          <p className="text-transparent">;</p>
          <p className="">
            You can send an email to{" "}
            <span className="underline font-semibold">
              iimsrauzza@gmail.com
            </span>
          </p>
          <p className="">OR</p>
          <p className="px-10 lg:px-0 ">
            Apply Online to fill the form below to explore the opportunity
            withIIMS and Indian HospitalFamily.
          </p>
        </div>
        {/* Career Form */}
        <CareerForm />
      </div>
      <GalleryCarousel images={images} />
    </div>
  );
};

export default Career;
