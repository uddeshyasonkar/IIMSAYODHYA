import React, { useState } from "react";

const notices = [
  {
    id: 0,
    title: "Notice 1",
    url: "https://example.com/notice1",
  },
  {
    id: 1,
    title: "Notice 2",
    url: "https://example.com/notice1",
  },
  {
    id: 2,
    title: "Notice 3",
    url: "https://example.com/notice1",
  },
  {
    id: 3,
    title: "Notice 4",
    url: "https://example.com/notice1",
  },
  {
    id: 4,
    title: "Notice 5",
    url: "https://example.com/notice1",
  },
  {
    id: 5,
    title: "Notice 6",
    url: "https://example.com/notice1",
  },
  {
    id: 6,
    title: "Notice 7",
    url: "https://example.com/notice1",
  },
  {
    id: 7,
    title: "Notice 8",
    url: "https://example.com/notice1",
  },
  {
    id: 8,
    title: "Notice 9",
    url: "https://example.com/notice1",
  },
];

const Notices = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < notices.length - 3) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <h2 className="Zilla text-project-red text-2xl font-bold">
        OUR PARTNERS
      </h2>
      <div className="max-w-7xl mx-auto p-6 ">
        <div className="relative flex flex-col gap-10">
          <div className="overflow-hidden">
            <div
              className=" flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
            >
              {notices.map((text, i) => (
                <div
                  key={text.id}
                  className="min-w-[33.3333%] w-90 px-2 box-border flex justify-center"
                >
                  <div className="bg-white shadow-lg h-60 w-full flex items-center justify-center text-xl font-mono">
                    {text.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex justify-between flex-row-reverse items-center ">
            {/* Navigation Arrows */}
            <div className=" w-max flex justify-between gap-10 ">
              <button
                onClick={prev}
                className="text-black hover:text-red-500 transition"
                disabled={index === 0}
              >
                {/* <ArrowLeft /> */}
                <img
                  src="./src/assets/icons/arrow_left.png"
                  alt=""
                  className=""
                />
              </button>
              <button
                onClick={next}
                className="text-black hover:text-red-500 transition"
                disabled={index >= notices.length - 3}
              >
                {/* <ArrowRight /> */}
                <img
                  src="./src/assets/icons/arrow_right.png"
                  alt=""
                  className=""
                />
              </button>
            </div>

            {/* Dots */}
            <div className="flex space-x-2 justify-start  w-max">
              {Array.from({ length: Math.ceil(notices.length - 2) }).map(
                (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      index === i ? "bg-black w-6 rounded-xl" : "bg-gray-300"
                    }`}
                  ></div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
