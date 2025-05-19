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
      className="hero p-5 lg:py-20 w-full h-max bg-project-white flex flex-col items-center gap-14 lg:gap-6 text-center"
    >
      {/* <h2 className="Zilla text-project-red text-2xl font-bold">COURSES</h2> */}
      <div className="w-max grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 px-4 place-items-center">
        {ModulesData.map((data) => (
          <div
            key={data.id}
            className="w-35 h-35 lg:w-60 lg:h-50 p-6 bg-gray-100 hover:bg-project-sec-red transition ease-in-out hover:scale-105 shadow-xl rounded-lg flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center">
              {/* icons div */}
              {/* <div className="flex-2 flex items-center justify-center">
                <img src={data.icon} alt="" className="h-8 lg:h-12" />
              </div> */}
              {/* text div */}
              <div className="flex-1 flex items-center justify-center mt-4">
                <h3 className="Barlow text-sm lg:text-base font-semibold">
                  {data.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
