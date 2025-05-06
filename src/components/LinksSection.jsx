import React from "react";

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
  { id: 0, name: "MOOC Courses", url: "#" },
  { id: 1, name: "E-resources", url: "#" },
  { id: 2, name: "E-learning", url: "#" },
  { id: 3, name: "Non Teaching Staff", url: "#" },
  { id: 4, name: "TEQIP", url: "#" },
  { id: 5, name: "Workshop/Hackathon", url: "#" },
  { id: 6, name: "RTI", url: "#" },
];

const externalLinks = [
  { id: 0, name: "TTU", url: "#" },
  { id: 1, name: "RTU", url: "#" },
  { id: 2, name: "AICTE", url: "#" },
  { id: 3, name: "SWAYAM", url: "#" },
  { id: 4, name: "DigiLockers", url: "#" },
  { id: 5, name: "Online RTI Portal, Rajasthan", url: "#" },
  { id: 6, name: "B.Pharma Admissions", url: "#" },
];

const Contact = [
  { id: 0, name: "Badliya Chouraha, N.H.8, Ajmer" },
  { id: 1, name: "principal@ecajmer.ac.in" },
  { id: 2, name: "principal.eca@rajasthan.gov.in" },
  { id: 3, name: "+911452971024" },
  { id: 4, name: "Portal, Rajasthan" },
  { id: 5, name: "missions" },
  { id: 6, name: "Press" },
  { id: 7, name: "NO Audit" },
  { id: 8, name: "GST No: 08AABAP0959P1ZZ" },
];

const LinksSection = () => {
  return (
    <div
      id="bottomContainer"
      className="bottomContainer px-20  w-full h-max  flex flex-row items-start justify-between gap-14 lg:gap-20 text-center "
    >
      <div className="flex flex-col text-left gap-1">
        <span className="Zilla text-base font-semibold">Useful Links</span>
        {usefulLinks.map((link) => (
          <a
            href={link.url}
            key={link.id}
            className="Barlow text-sm cursor-pointer"
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col text-left gap-1">
        <span className="Zilla text-base font-semibold">Quick Links</span>
        {quickLinks.map((link) => (
          <a
            href={link.url}
            key={link.id}
            className="Barlow text-sm cursor-pointer"
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col text-left gap-1">
        <span className="Zilla text-base font-semibold">External Links</span>
        {externalLinks.map((link) => (
          <a
            href={link.url}
            key={link.id}
            className="Barlow text-sm cursor-pointer"
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col text-left gap-1">
        <span className="Zilla text-base font-semibold">External Links</span>
        {Contact.map((link) => (
          <span className="Barlow text-sm ">{link.name}</span>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;
