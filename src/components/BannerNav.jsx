import React from "react";
import { NavLink } from "react-router-dom";

const BannerNav = ({ bgImg, buttons = [] }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-60 lg:h-90 bg-cover bg-center flex flex-col items-center justify-center gap-6"
    >
      {/* <h2 className="text-white text-4xl font-bold mb-4">
        Welcome to Our Institute
      </h2> */}
      <div className="flex gap-5 lg:gap-20 flex-col lg:flex-row   justify-center">
        {buttons.map((btn, idx) => (
          <NavLink
            key={btn.to}
            to={btn.to}
            className={`flex justify-center items-center px-6 py-2 border-project-black border-2 lg:py-4 lg:w-40  font-semibold transition-colors duration-200 ${
              idx % 2 === 0
                ? "bg-project-sec-red text-black hover:bg-project-black hover:text-white "
                : "bg-white text-black border-2 border-project-black hover:bg-project-black hover:text-project-white"
            }`}
          >
            {btn.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BannerNav;
