import React, { useState } from "react";

const FACULTIES = [
  {
    id: 1,
    title: "CREATIVE",
    content: ["Art Direction", "Creative Direction"],
  },
  {
    id: 2,
    title: "DESIGN",
    content: [
      "Digital Design",
      "UX/UI Design",
      "Web Design",
      "Graphic Design",
      "3D Design",
      "Interactive Design",
      "Illustration Design",
      "Brand Design",
    ],
  },
  {
    id: 3,
    title: "ANIMATION",
    content: [
      "Art Direction",
      "3D Animation",
      "Motion Graphics",
      "Experimental Animation",
      "Typography Animation",
    ],
  },
  {
    id: 4,
    title: "TECHNOLOGY",
    content: [
      "Development",
      "Implementation",
      "Creative Coding",
      "Prototyping",
      "Quality Assurance",
      "Testing",
    ],
  },
  {
    id: 5,
    title: "PROJECT DELIVERY",
    content: ["Production Strategy", "Project Management", "Team Direction"],
  },
  {
    id: 6,
    title: "EXAMPLE PRODUCTS",
    content: [
      "Social Ads",
      "Websites",
      "AR Filters and Experiences",
      "Display Ads (Htm15, Static, Rich media)",
      "Digital Out of Home",
      "Static and Animated Assets",
      "Digital Installations",
      "Design Toolkits",
    ],
  },
];

const ExpandableGridAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const visibleCount = expanded ? FACULTIES.length : 3;

  // For Lenis smooth scroll compatibility, avoid auto-scroll on expand/collapse

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 w-full max-w-4xl mx-auto transition-all duration-500">
        {FACULTIES.slice(0, visibleCount).map((faculty, idx) => (
          <div
            key={faculty.id}
            className="bg-white w-full aspect-square rounded-md shadow-xl flex flex-col"
          >
            {/* Accordion Header */}
            <button
              className="w-full flex justify-between items-center px-4 py-4 text-left text-base font-semibold bg-gray-100 focus:outline-none cursor-pointer rounded-t-md"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              tabIndex={0}
            >
              <span
                className={`font-medium ${
                  activeIndex === idx ? "text-project-sec-red" : "text-black"
                }`}
              >
                {faculty.title}
              </span>
              <svg
                className={`w-5 h-5 transition-transform duration-400 ${
                  activeIndex === idx ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Accordion Content */}
            <div
              className={`bg-gray-50 overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeIndex === idx ? "max-h-96 mb-2" : "max-h-0"
              }`}
            >
              {faculty.content.map((item, i) => (
                <div
                  key={i}
                  className="px-6 py-2 text-gray-600 text-sm hover:bg-project-sec-red hover:text-white transition-all duration-100 ease-in"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!expanded && FACULTIES.length > 3 && (
        <div className="relative w-full flex flex-col items-center mt-4">
          {/* Gradient/blur overlay */}
          <div className="absolute -top-16 left-0 w-full h-16 pointer-events-none z-10 bg-gradient-to-t from-project-sec-red via-project-sec-red/80 to-transparent blur-[2px]" />
          {/* Expand button */}
          <button
            onClick={() => setExpanded(true)}
            className="relative z-20 flex flex-col items-center focus:outline-none"
          >
            <span className="font-bold text-base md:text-lg">Expand</span>
            <span className="material-symbols-outlined animate-bounce mt-1 text-3xl md:text-4xl">
              expand_more
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpandableGridAccordion;
