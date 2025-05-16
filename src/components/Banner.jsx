import React from "react";
import "./Banner.css";

const NoticesData = [
  {
    id: 1,
    title: "ADMISSION OPEN FOR SESSION 2025-26",
    description: "This is the description for notice 1.",
    url: "#",
  },
  {
    id: 2,
    title: "ADMISSION OPEN FOR SESSION 2025-26",
    description: "This is the description for notice 3.",
    url: "#",
  },
  {
    id: 3,
    title: "ADMISSION OPEN FOR SESSION 2025-26",
    description: "This is the description for notice 4.",
    url: "#",
  },
];

const Banner = () => {
  return (
    <div className="blobs py-[20px] lg:py-[60px]">
      <div className="blobs-slide">
        {[...NoticesData].map((notice, index) => (
          <a
            key={index}
            href={notice.url}
            target="_blank"
            className="blob-item cursor-pointer"
          >
            <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
          </a>
        ))}
      </div>
      <div className="blobs-slide">
        {[...NoticesData].map((notice, index) => (
          <a
            key={index}
            href={notice.url}
            target="_blank"
            className="blob-item cursor-pointer"
          >
            <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
          </a>
        ))}
      </div>
      <div className="blobs-slide">
        {[...NoticesData].map((notice, index) => (
          <a
            key={index}
            href={notice.url}
            target="_blank"
            className="blob-item cursor-pointer"
          >
            <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
          </a>
        ))}
      </div>
      {/* <div className="blobs-slide" aria-hidden="true">
        {[...BlobData].map((blob, index) => (
          <div
            key={index}
            className="blob-item"
            style={{ backgroundColor: blob.color, color: blob.text }}
          >
            <span>{blob.tilte}</span>
          </div>
        ))}
      </div> */}
      {/* <div className="blobs-slide" aria-hidden="true">
			{[...BlobData].map((blob, index) => (
			  <div
				key={index}
				className="blob-item"
				style={{ backgroundColor: blob.color, color: blob.text }}
			  >
				<span>{blob.tilte}</span>
			  </div>
			))}
		  </div> */}
    </div>
  );
};

export default Banner;

{
  /* <div className="flex flex-row gap-20 justify-center items-center  py-4">
        {NoticesData.map((data) => (
          <a key={data.id} className="cursor-pointer">
            <h3 className="Barlow text-xl ">{data.title}</h3>
          </a>
        ))}
      </div> */
}
