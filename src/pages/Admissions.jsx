import React from "react";
import NameInfoBanner from "../components/NameInfoBanner";
import CourseGrid from "../sections/CourseGrid";
import BottomContainer from "../sections/BottomContainer";
import ScrollToTop from "../utils/ScrollToTop";
import PdfViewer from "../components/PdfViewer";

const Admissions = () => {
  ScrollToTop();
  return (
    <div id="admissions" className="w-full min-h-screen">
      {/* Downloadable Pdf */}
      <div className=" w-full min-h-max  h-max lg:h-[90vh] flex flex-col justify-center items-center gap-14 lg:gap-6 mt-10 md:mt-0 pt-25 lg:pt-32 text-center relative ">
        <div className="h-60 lg:h-110 w-full lg:w-[90%] bg-cover bg-center flex flex-col items-center justify-center gap-6 overflow-hidden relative">
          <img
            src="https://images.pexels.com/photos/7979428/pexels-photo-7979428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-full w-full object-cover filter blur-xs brightness-80"
          />
          <button
            className="absolute w-70 lg:w-max top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-project-red text-project-white rounded-sm px-10 py-4 hover:bg-project-white hover:text-project-red transition duration-300"
            onClick={() => window.open("./files/Admission_Form.pdf", "_blank")}
          >
            <span className="text-base lg:text-2xl font-semibold  Zilla">
              Download Admission Form
            </span>
          </button>
        </div>
      </div>

      {/* NameInfoBanner */}
      <NameInfoBanner />
      {/* Courses Offered */}
      <CourseGrid />
      {/* Pdf viewer */}
      {/* <PdfViewer /> */}

      <div className="p-10">
        <iframe
          src="./files/Admission_Form.pdf"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Admissions;
