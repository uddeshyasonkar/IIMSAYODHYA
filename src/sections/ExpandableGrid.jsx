import React, { useState } from "react";

const FACULTIES = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const ExpandableGrid = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = expanded ? FACULTIES.length : 3;

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="grid grid-cols-2 xs:grid-cols-2  md:grid-cols-3 gap-4 lg:gap-12 px-8 md:px-0 w-full max-w-4xl mx-auto transition-all duration-500 ">
        {FACULTIES.slice(0, visibleCount).map((f) => (
          <div
            key={f.id}
            className="bg-white w-full aspect-square rounded-md shadow-xl"
          />
        ))}
      </div>
      {!expanded && (
        <div className="relative w-full flex flex-col items-center mt-4">
          {/* Gradient/blur overlay */}
          <div className="absolute -top-12 left-0 w-full h-16 pointer-events-none z-10 bg-gradient-to-t from-white via-white/80 to-transparent blur-[2px]" />
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

export default ExpandableGrid;
