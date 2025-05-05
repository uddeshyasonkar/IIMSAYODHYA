import React from "react";

const HeadingDivider = ({ title, icon }) => {
  return (
    <div className="py-4 bg-gradient-to-r from-white to-project-sec-red flex flex-col justify-center gap-14 lg:gap-6 text-center">
      <h2 className="Zilla text-project-red text-2xl font-bold">{title}</h2>
      {icon}
    </div>
  );
};

export default HeadingDivider;
