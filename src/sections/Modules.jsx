import React from "react";

const ModulesData = [
  {
    id: 1,
    icon: "./src/assets/icons/Gear.png",
    title: "COLLEGE ERP",
    url: "",
    description: "This is the description for module 1.",
  },
  {
    id: 2,
    icon: "./src/assets/icons/Money.png",
    title: "ONLINE FEE SUBMISSION",
    url: "",
    description: "This is the description for module 2.",
  },
  {
    id: 3,
    icon: "./src/assets/icons/Student.png",
    title: "B.Tech FIRST YEAR",
    url: "",
    description: "This is the description for module 3.",
  },
  {
    id: 4,
    icon: "./src/assets/icons/News.png",
    title: "IIMS IN PRESS",
    url: "",
    description: "This is the description for module 1.",
  },
  {
    id: 5,
    icon: "./src/assets/icons/Employee.png",
    title: "EMPLOYEE LOGIN",
    url: "",
    description: "This is the description for module 2.",
  },
  {
    id: 6,
    icon: "./src/assets/icons/Circular.png",
    title: "CIRCULARS",
    url: "",
    description: "This is the description for module 3.",
  },
];

const Modules = () => {
  return (
    <div
      id="modules"
      className="hero py-20 w-full h-max bg-project-white   flex flex-col items-center gap-14 lg:gap-6 text-center"
    >
      <div className="w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4  place-items-center">
        {ModulesData.map((data) => (
          <div
            key={data.id}
            className="w-60 h-40 p-6 bg-gray-100 hover:bg-project-sec-red transition ease-in-out hover:scale-105 shadow-xl rounded-lg  flex flex-col  items-center justify-center "
          >
            {/* icons div */}
            <div className=" flex-2 flex items-center justify-center  ">
              <img src={data.icon} alt="" className="h-12 w-12 " />
            </div>
            {/* text div */}
            <div className=" flex-1 flex items-center justify-center ">
              <h3 className="Barlow text-base font-normal">{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
