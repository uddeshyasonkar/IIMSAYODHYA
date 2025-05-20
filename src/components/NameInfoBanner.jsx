import React from "react";

const NameInfoBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row p-8 bg-project-sec-red gap-4 lg:gap-0">
      <div className="flex-1 Zilla flex gap-3 flex-col">
        <h2 className="font-bold text-xl">
          INDIAN INSTITUTE OF MEDICAL SCIENCE ,AYODHYA
        </h2>

        <a href="" className="font-semibold flex justify-start gap-2 ">
          <span className="">Get Directions</span>
          <span class="material-symbols-rounded">directions_alt</span>
        </a>
      </div>
      <div className="flex-1">
        <p className="Barlow text-sm font-semibold text-justify">
          Spread across an area of 12.58 acres, Medanta Lucknow is one of the
          largest multi-super-specialty hospitals in Uttar Pradesh. Built with
          the aim to provide highest standard of tertiary healthcare within the
          state and to the neighbouring regions, the hospital brings together
          internationally acclaimed doctors, exceptionally trained nurses and
          paramedics, best-in-class technology and state-of-the-art
          infrastructure to create an ecosystem of excellence that delivers
          world-class, patient-centric, intergrated and affordable healthcare. 
        </p>
      </div>
    </div>
  );
};

export default NameInfoBanner;
