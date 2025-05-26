import React from "react";

const NameInfoBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row p-8 bg-project-sec-red gap-4 lg:gap-0">
      <style>
        {/* {`
          @keyframes scalePulse {
            0% { transform: scale(1);}
            50% { transform: scale(1.04);}
            100% { transform: scale(1);}
          }
          .scale-pulse {
            animation: scalePulse 2s infinite;
          }
        `} */}
      </style>
      <div className="flex-1 Zilla flex gap-3 flex-col ">
        <h2 className="font-bold text-xl">
          INDIAN INSTITUTE OF MEDICAL SCIENCE ,AYODHYA
        </h2>

        <a
          href="#map"
          className="text-left font-semibold text-2xl text-project-red flex items-center gap-2 "
        >
          <span className="">Get Directions</span>
          <span className="material-symbols-rounded">directions_alt</span>
        </a>
      </div>
      <div className="flex-1">
        <p className="Barlow text-sm font-semibold text-justify">
          Established in 2013, the Indian Institute of Medical Science and
          Hospital is committed to providing job-oriented professional courses
          in Nursing and Pharmacy. Our programs include Bachelor in Nursing (BSc
          Nursing), Auxiliary Nursing Midwifery (ANM), General Nursing and
          Midwifery (GNM), Diploma in Pharmacy (D.Pharma), and Bachelor in
          Pharmacy (B.Pharma). Affiliation and Approval: Affiliated with Abdul
          Kalam Technical University and approved by the Government of Uttar
          Pradesh, we ensure that our students receive a quality education in a
          conducive academic environment.
        </p>
      </div>
    </div>
  );
};

export default NameInfoBanner;
