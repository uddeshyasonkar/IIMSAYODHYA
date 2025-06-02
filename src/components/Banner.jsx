import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const NoticesData = [
  {
    id: 1,
    title: "ADMISSION OPEN NOW",
    description: "This is the description for notice 1.",
    isAnchor: false,
    isLink: true,
    isText: false,
    url: "/admissions",
  },
  {
    id: 2,
    title: "•",
    description: "This is the description for notice 1.",
    isAnchor: false,
    isLink: false,
    isText: true,
    url: "#",
  },
  {
    id: 3,
    title: "ADMISSION OPEN NOW",
    description: "This is the description for notice 1.",
    isAnchor: false,
    isLink: true,
    isText: false,
    url: "/admissions",
  },
  {
    id: 4,
    title: "•",
    description: "This is the description for notice 1.",
    isAnchor: false,
    isLink: false,
    isText: true,
    url: "#",
  },
  {
    id: 5,
    title: "ADMISSION OPEN NOW",
    description: "This is the description for notice 1.",
    isAnhor: false,
    isLink: true,
    isText: false,
    url: "/admissions",
  },
  {
    id: 6,
    title: "•",
    description: "This is the description for notice 1.",
    isAnchor: false,
    isLink: false,
    isText: true,
    url: "#",
  },
  {
    id: 7,
    title: "ADMISSION OPEN NOW",
    description: "This is the description for notice 1.",
    isAnchor: false,
    isLink: true,
    isText: false,
    url: "/admissions",
  },
  {
    id: 8,
    title: "•",
    description: "This is the description for notice 1.",
    isAnchor: false,
    isLink: false,
    isText: true,
    url: "#",
  },
];

const Banner = () => {
  return (
    <div className="blobs py-[20px] lg:py-[60px]">
      <div className="blobs-slide">
        {NoticesData.map((notice, index) => {
          if (notice.isAnchor) {
            return (
              <a
                href={notice.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="blob-item cursor-pointer"
              >
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </a>
            );
          } else if (notice.isLink) {
            return (
              <NavLink
                to={notice.url}
                key={index}
                className="blob-item cursor-pointer"
              >
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </NavLink>
            );
          } else if (notice.isText) {
            return (
              <span key={index} className="blob-item cursor-default">
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="blobs-slide">
        {NoticesData.map((notice, index) => {
          if (notice.isAnchor) {
            return (
              <a
                href={notice.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="blob-item cursor-pointer"
              >
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </a>
            );
          } else if (notice.isLink) {
            return (
              <NavLink
                to={notice.url}
                key={index}
                className="blob-item cursor-pointer"
              >
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </NavLink>
            );
          } else if (notice.isText) {
            return (
              <span key={index} className="blob-item cursor-default">
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="blobs-slide">
        {NoticesData.map((notice, index) => {
          if (notice.isAnchor) {
            return (
              <a
                href={notice.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="blob-item cursor-pointer"
              >
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </a>
            );
          } else if (notice.isLink) {
            return (
              <NavLink
                to={notice.url}
                key={index}
                className="blob-item cursor-pointer"
              >
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </NavLink>
            );
          } else if (notice.isText) {
            return (
              <span key={index} className="blob-item cursor-default">
                <h3 className="Barlow text-sm lg:text-xl ">{notice.title}</h3>
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
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
