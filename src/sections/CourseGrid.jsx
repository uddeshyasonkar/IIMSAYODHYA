const ModulesData = [
  {
    id: 1,
    icon: "./images/icons/Gear.png",
    title: "B.Sc Nursing",
    isAnchor: true,
    isLink: false,
    url: "http://erp.iimsandhospital.com/",
    description: "This is the description for module 1.",
  },
  {
    id: 2,
    icon: "./images/icons/Money.png",
    title: "ANM (Auxiliary Nursing Midwifery)",
    isAnchor: false,
    isLink: false,
    url: "",
    description: "This is the description for module 2.",
  },
  {
    id: 3,
    icon: "./images/icons/Student.png",
    title: "GNM (General Nursing and Midwifery)",
    isAnchor: false,
    isLink: true,
    url: "/courses",
    description: "This is the description for module 3.",
  },
  {
    id: 4,
    icon: "./images/icons/News.png",
    title: "B. Pharma (Bachelor in Pharmacy)",
    isAnchor: false,
    isLink: false,
    url: "",
    description: "This is the description for module 1.",
  },
  {
    id: 5,
    icon: "./images/icons/Employee.png",
    title: "D. Pharma (Diploma in Pharmacy)",
    isAnchor: true,
    isLink: false,
    url: "https://iimsandhospital.com/Login.aspx",
    description: "This is the description for module 2.",
  },
];
import React from "react";

const CourseGrid = () => {
  return (
    <div
      id="modules"
      className="CourseGrid px-5 py-12 lg:py-20 w-full h-max  flex flex-col items-center gap-10 lg:gap-10 text-center "
    >
      <h2 className="Zilla text-project-red text-2xl font-bold">
        COURSES OFFERED
      </h2>
      <div className="border-black border-0 lg:border-2 py-4 lg:py-6 rounded-full bg-transparent lg:bg-project-white  w-full lg:w-[80%] flex flex-col lg:flex-row justify-center  lg:items-center gap-12 lg:gap-40 ">
        <div className="Zilla courseContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3022/3022827.png"
            alt=""
            className="h-20"
          />
          <div className="courseDetailsContainer ">
            <span className="courseSeats ">60 Seats</span>
            <span className="courseTitle ">B-Pharma</span>
          </div>
        </div>

        <div className="Zilla courseContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4320/4320337.png"
            alt=""
            className="h-20"
          />
          <div className="courseDetailsContainer">
            <span className="courseSeats">60 Seats</span>
            <span className="courseTitle">D-Pharma</span>
          </div>
        </div>

        <div className="Zilla courseContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4850/4850909.png"
            alt=""
            className="h-20"
          />
          <div className="courseDetailsContainer">
            <span className="courseTitle">G.N.M./A.N.M.</span>
            <span className="courseTitle">B.Sc Nursing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
