import React from "react";
import NameInfoBanner from "../components/NameInfoBanner";
import BottomContainer from "../sections/BottomContainer";
import BannerNav from "../components/BannerNav";
import ScrollToTop from "../utils/ScrollToTop";

const affiliations = [
  { id: 0, name: "Approved by the Nursing Council of India " },
  { id: 1, name: "Affiliated with the Uttar Pradesh Medical Faculty " },
  { id: 2, name: "Affiliated with Atal Bihari Bajpai Medical University " },
  { id: 3, name: "Nursing Code: 1098 Pharmacy Courses" },
  { id: 4, name: "Approved by the Pharmacy Council of India" },
  { id: 5, name: "Affiliated with the Board of Technical Education " },
  { id: 6, name: "Affiliated with Abdul Kalam Technical University" },
  { id: 6, name: "Pharmacy Code: 3966" },
];

const Courses = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
      {/* Downloadable Pdf */}
      <div
        id="courses"
        className="courses w-full min-h-max  h-[80vh] lg:h-[90vh] flex flex-col justify-center items-center gap-14 lg:gap-6 mt-30 md:mt-0 pt-10 lg:pt-40 text-center "
      >
        {/* <span className="text-2xl font-semibold Zilla">VIDEO/PHOTO</span> */}

        <div className="border-black border-0 lg:border-2 py-6 rounded-[70px]  w-[90%] lg:w-[80%] flex flex-col  items-center gap-6 lg:gap-3 p-10">
          {/* B pharma */}
          <div className="Zilla flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 ">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3022/3022827.png"
                alt=""
                className="h-12 lg:h-20"
              />
            </div>

            <div className="">
              <span className="font-bold text-project-red text-3xl  lg:text-3xl">
                B-Pharma
              </span>
            </div>

            <div className="text-left">
              <span className="">
                <span className=" font-bold">Eligibility:</span>
                50% Marks in PCB/PCM in 10+2, For SC/ST 45% Marks in PCB/PCM in
                10+2 Duration :
                <span className="text-project-red font-semibold">4 Years</span>
              </span>
            </div>
          </div>
          {/* divider */}
          <div className="w-[90%] h-[2px] bg-gray-400 my-[10px]"></div>

          {/* D pharma */}
          <div className="Zilla flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 ">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4320/4320337.png"
                alt=""
                className="h-12 lg:h-20"
              />
            </div>

            <div className="">
              <span className="font-bold text-project-red text-3xl  lg:text-3xl">
                D-Pharma
              </span>
            </div>

            <div className="text-left">
              <span className="">
                <span className=" font-bold">Eligibility:</span>
                50% Marks in PCB/PCM in 10+2, For SC/ST 45% Marks in PCB/PCM in
                10+2 Duration :
                <span className="text-project-red font-semibold">4 Years</span>
              </span>
            </div>
          </div>
          {/* Divider */}
          <div className="w-[90%] h-[2px] bg-gray-400 my-[10px]"></div>

          {/* GNM, ANM, Bsc Nursing */}
          <div className="Zilla flex flex-col lg:flex-row  items-center gap-5 lg:gap-16 ">
            <div className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4850/4850909.png"
                alt=""
                className="h-12 lg:h-20"
              />
            </div>

            <div className="flex flex-col  items-start  gap-5">
              {/* GNM Block */}
              <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-18">
                <div className="">
                  <span className="font-bold text-project-red text-3xl  lg:text-3xl">
                    G.N.M
                  </span>
                </div>

                <div className="text-left">
                  <span className="">
                    <span className=" font-bold">Eligibility:</span>
                    50% Marks in PCB/PCM in 10+2, For SC/ST 45% Marks in PCB/PCM
                    in 10+2 Duration :
                    <span className="text-project-red font-semibold">
                      4 Years
                    </span>
                  </span>
                </div>
              </div>

              <div className="w-full h-[2px] bg-gray-400 my-[10px]"></div>
              {/* ANM Block */}
              <div className="flex justify-start items-center  gap-6 lg:gap-18 flex-col lg:flex-row ">
                <div className="">
                  <span className="font-bold text-project-red text-3xl  lg:text-3xl">
                    A.N.M
                  </span>
                </div>

                <div className="text-left">
                  <span className="">
                    <span className=" font-bold">Eligibility:</span>
                    Eligibility: Eligibility: 45% Marks in 10+2 Duration:
                    <span className="text-project-red font-semibold">
                      2 Years
                    </span>
                  </span>
                </div>
              </div>

              <div className="w-full h-[2px] bg-gray-400 my-[10px]"></div>
              {/* B.sc Nursing Block */}
              <div className="flex flex-col lg:flex-row justify-start items-center gap-5 lg:gap-10">
                <div className="">
                  <span className="font-bold text-project-red text-2xl  lg:text-xl">
                    B.Sc Nursing
                  </span>
                </div>

                <div className="text-left">
                  <span className="">
                    <span className=" font-bold">Eligibility:</span>
                    Through counseling conducted by Atal Bihari bajpayi medical
                    test Duration :
                    <span className="text-project-red font-semibold">
                      4 Years
                    </span>
                  </span>
                </div>
              </div>

              {/* <div className="w-full h-[2px] bg-gray-400 my-[10px]"></div> */}
            </div>
          </div>

          {/* <div className="w-[90%] h-[2px] bg-gray-400 my-[10px]"></div> */}
        </div>
      </div>

      {/* Affiliations and Programs */}
      <div
        id="affiliations"
        className="px-5 py-20 lg:py-20 w-full h-max bg-project-white flex flex-col items-center gap-0 lg:gap-0 text-center"
      >
        <h2 className="Zilla text-project-red text-2xl font-bold">
          Affiliations & Programs
        </h2>
        <span className="text-transparent">;</span>
        <div className="lg:w-3/5 flex flex-col gap-6 lg:gap-10 px-4 text-left">
          <p className="Zilla text-base lg:text-xl ">
            At the Indian Institute of Medical Science and Hospital, we take
            pride in our affiliations with esteemed regulatory bodies, ensuring
            that our courses meet the highest standards of education and
            professional development.
          </p>
          <p className="Zilla text-base lg:text-xl">
            Nursing Courses:
            <ul>
              {affiliations.map((affiliation) => (
                <li key={affiliation.id} className="">
                  ● {affiliation.name}
                </li>
              ))}
            </ul>{" "}
          </p>
          <p className="Zilla text-base lg:text-xl">
            These affiliations are a testament to our dedication to providing
            education that meets and exceeds industry standards. As a student at
            our institution, you can be assured that your academic journey
            aligns with the best practices and regulations set forth by these
            reputable organizations
          </p>
        </div>
      </div>

      {/* NameInfoBanner */}
      <NameInfoBanner />
      {/* banner with buttons */}
      <BannerNav
        buttons={[
          { label: "Admissions", to: "/admissions" },
          { label: "Career", to: "/career" },
        ]}
      />
    </div>
  );
};

export default Courses;
