import React from "react";
import { NavLink } from "react-router";
import MapComponent from "./MapComponent";

const usefulLinks = [
  { id: 0, name: "Audit Report & Balance Sheets", url: "#" },
  { id: 1, name: "MOOC Courses", url: "#" },
  { id: 2, name: "Mandatory Disclosure", url: "#" },
  { id: 3, name: "E-resources", url: "#" },
  { id: 4, name: "Annual Reports", url: "#" },
  { id: 5, name: "Higher Education Policy", url: "#" },
  { id: 6, name: "MoUs with Compaines", url: "#" },
  { id: 7, name: "National Innovation and Startup Policy", url: "#" },
  { id: 8, name: "Gallery", url: "#" },
  { id: 9, name: "Nodal Officer", url: "#" },
  //   { id: 10, name: "Visitor Number: 2483911", url: "#" },
];

const quickLinks = [
  { id: 0, name: "HOME", url: "/" },
  { id: 1, name: "ABOUT US", url: "/about-us" },
  { id: 2, name: "ADMISSIONS", url: "/admissions" },
  { id: 3, name: "COURSES", url: "/courses" },
  { id: 4, name: "GALLERY", url: "/gallery" },
  { id: 5, name: "CARRER", url: "/career" },
  { id: 6, name: "CONTACT US", url: "/contact-us" },
];

const externalLinks = [
  { id: 0, name: "TTU", url: "#" },
  { id: 1, name: "RTU", url: "#" },
  { id: 2, name: "AICTE", url: "#" },
  { id: 3, name: "SWAYAM", url: "#" },
  { id: 4, name: "DigiLockers", url: "#" },
  // { id: 5, name: "Online RTI Portal, Rajasthan", url: "#" },
  { id: 6, name: "B.Pharma Admissions", url: "#" },
];

const Contact = [
  { id: 0, name: "Village-Tanda Khulasa" },
  { id: 1, name: "Post-Rauzagaon, Rudauli, Ayodhya" },
  { id: 2, name: " Pin Code-224116 (U.P.)" },
  { id: 3, name: "iimsrauzza@gmail.com" },
  { id: 4, name: "iimsrauzzagaon@gmail.com" },
  { id: 5, name: "+91-8009740607" },
  { id: 6, name: "+91-7905202014" },
  // { id: 7, name: "missions" },
  // { id: 8, name: "Press" },
  // { id: 9, name: "NO Audit" },
  // { id: 8, name: "GST No: 08AABAP0959P1ZZ" },
];

// Village-Tanda Khulasa, Post-Rauzagaon, Rudauli, Ayodhya, Pin Code-224116 (U.P.)

const LinksSection = () => {
  return (
    <div
      id="bottomContainer"
      className="bottomContainer px-10 lg:px-20  w-full h-max  flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-20 text-center "
    >
      {/* <div className="flex flex-col text-left gap-0.5 lg:gap-1">
        <span className="Zilla text-lg lg:text-base font-semibold">
          Useful Links
        </span>
        {usefulLinks.map((link) => (
          <a
            href={link.url}
            key={link.id}
            className="Barlow text-base lg:text-sm  cursor-pointer"
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div> */}
      <MapComponent />
      <div className="flex-1 w-full h-max  flex flex-col lg:flex-row items-start justify-between lg:justify-around gap-8 lg:gap-20">
        <div className="flex flex-col text-left gap-1">
          <span className="Zilla text-lg lg:text-base font-semibold">
            Quick Links
          </span>
          {quickLinks.map((link) => (
            <NavLink
              to={link.url}
              key={link.id}
              className="Barlow text-base lg:text-sm  cursor-pointer"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col text-left gap-1">
          <span className="Zilla text-lg lg:text-base font-semibold">
            Information
          </span>
          {Contact.map((link) => (
            <span className="Barlow text-base lg:text-sm">{link.name}</span>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-col text-left gap-1">
        <span className="Zilla text-lg lg:text-base font-semibold">
          External Links
        </span>
        {externalLinks.map((link) => (
          <a
            href={link.url}
            key={link.id}
            className="Barlow text-base lg:text-sm  cursor-pointer"
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default LinksSection;
