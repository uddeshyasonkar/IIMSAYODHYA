import React from "react";
import { NavLink } from "react-router-dom";

const HeadingDivider = ({ title, icon, isLink, Link, url }) => {
  return (
    <div className="py-4 bg-gradient-to-r from-white to-project-sec-red flex flex-row justify-center items-center gap-2 lg:gap-6 text-center">
      <h2 className="Zilla text-project-red text-lg lg:text-2xl font-bold">
        {title}
      </h2>
      {isLink && (
        <a
          href="./IIMS_Final_Prospectus.pdf"
          download
          className="hover:scale-120 flex justify-center items-center gap-1 text-sm"
        >
          <span class="material-symbols-outlined">{icon}</span>
        </a>
      )}

      {/* Download Prospectus{" "}
        <span class="material-symbols-outlined">download</span> */}
    </div>
  );
};

export default HeadingDivider;
