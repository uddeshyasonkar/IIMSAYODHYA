import React from "react";

const Vision = ({ heading, content }) => {
  return (
    <div
      id="modules"
      className="hero px-5 py-20 lg:py-20 w-full h-max bg-project-white flex flex-col items-center gap-0 lg:gap-0 text-center"
    >
      <h2 className="Zilla text-project-red text-2xl font-bold">{heading}</h2>;
      <div className="lg:w-2/3 flex gap-6 lg:gap-12 px-4 ">
        <p className="Zilla text-base lg:text-xl">{content}</p>
      </div>
    </div>
  );
};

export default Vision;
