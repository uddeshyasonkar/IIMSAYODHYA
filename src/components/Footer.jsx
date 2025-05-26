import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-4  flex flex-col lg:flex-row gap-2 lg:gap-0 justify-around items-center">
      <span className=" Barlow text-project-black text-center text-xs lg:text-sm  ">
        ©2025 Indian Institute of Medical Science and Hospital
        <br />
        All Rights Reserved{" "}
      </span>
      <span className="Barlow text-project-black text-center text-xs lg:text-sm  ">
        Powered by{" "}
        <a
          href="https://hridyanshsingh.in/"
          className="text-project-red font font-normal"
          target="_blank"
        >
          Bits & Bools Pvt Ltd.
        </a>
      </span>
    </div>
  );
};

export default Footer;
