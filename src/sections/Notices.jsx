import React from "react";
import HeadingDivider from "../components/HeadingDivider";

const NoticesData = [
  {
    id: 1,
    title: "RESULTS 2025 1st Sem",
    description: "This is the description for notice 1.",
  },
  {
    id: 2,
    title: "RESULTS 2025 3rd Sem",
    description: "This is the description for notice 2.",
  },
  {
    id: 3,
    title: "RESULTS 2025 7th Sem",
    description: "This is the description for notice 3.",
  },
  {
    id: 4,
    title: "RESULTS 2025 1st Sem",
    description: "This is the description for notice 4.",
  },
];

const Notices = () => {
  return (
    <div id="notices" className="notices w-full h-max">
      {/* <div className="py-4 bg-gradient-to-r from-white to-project-sec-red flex flex-col justify-center gap-14 lg:gap-6 text-center">
        <h2 className="Zilla text-project-red text-2xl font-bold">
          IMPORTANT NOTICE
        </h2>
      </div> */}
      <HeadingDivider title="IMPORTANT NOTICE" />
      <div className="flex flex-row gap-20 justify-center items-center  py-4">
        {NoticesData.map((data) => (
          <a key={data.id} className="cursor-pointer">
            <h3 className="Barlow text-xl ">{data.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Notices;

{
  /* <div className="flex flex-col gap-6 items-center justify-center py-10">
{NoticesData.map((data) => (
  <div
	key={data.id}
	className="bg-white shadow-lg rounded-lg p-4 w-3/4 lg:w-1/2"
  >
	<h3 className="Zilla text-xl font-bold">{data.title}</h3>
	<p className="Barlow text-base font-light">{data.description}</p>
  </div>
))}
</div> */
}
