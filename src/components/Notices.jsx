import React, { useState } from "react";

const notices = [
  { id: 0, title: "Notice 1", url: "https://example.com/notice1" },
  { id: 1, title: "Notice 2", url: "https://example.com/notice1" },
  { id: 2, title: "Notice 3", url: "https://example.com/notice1" },
  { id: 3, title: "Notice 4", url: "https://example.com/notice1" },
  { id: 4, title: "Notice 5", url: "https://example.com/notice1" },
  { id: 5, title: "Notice 6", url: "https://example.com/notice1" },
  { id: 6, title: "Notice 7", url: "https://example.com/notice1" },
  { id: 7, title: "Notice 8", url: "https://example.com/notice1" },
  { id: 8, title: "Notice 9", url: "https://example.com/notice1" },
];

const Notices = () => {
  const [index, setIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  };

  const visibleCount = getVisibleCount();

  const next = () => {
    if (index < notices.length - visibleCount) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <h2 className="Zilla text-project-red text-2xl font-bold">
        IMPORTANT NOTICES
      </h2>
      <div className="bg-red-200 w-full  mx-auto p-4 md:p-6">
        <div className="relative flex flex-col gap-6 md:gap-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleCount)}%)`,
              }}
            >
              {notices.map((text) => (
                <div
                  key={text.id}
                  className="min-w-full md:min-w-[33.3333%] px-2 box-border flex justify-center"
                >
                  <div className="bg-white shadow-lg h-60 w-full flex items-center justify-center text-xl font-mono">
                    {text.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-0">
            {/* Navigation Arrows */}
            <div className="flex justify-between gap-6">
              <button
                onClick={prev}
                className="text-black hover:text-red-500 transition"
                disabled={index === 0}
              >
                <img src="./src/assets/icons/arrow_left.png" alt="left" />
              </button>
              <button
                onClick={next}
                className="text-black hover:text-red-500 transition"
                disabled={index >= notices.length - visibleCount}
              >
                <img src="./src/assets/icons/arrow_right.png" alt="right" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex space-x-2 justify-start w-max">
              {Array.from({
                length: Math.ceil(notices.length - visibleCount + 1),
              }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === i ? "bg-black w-6 rounded-xl" : "bg-gray-300 w-3"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
