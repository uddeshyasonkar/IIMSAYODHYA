import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { MenuRounded } from "@mui/icons-material";

const Mobileicon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.ul`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  list-style: none;
  width: 100%;
  padding: 12px 30px 24px 30px;
  position: absolute;
  top: 130px;
  left: 0;
  transition: all 0.4s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <nav className="navbar fixed top-0 left-0 w-full h-max  flex justify-between flex-col  lg:justify-between z-40 bg-project-sec-red shadow-lg">
      <div className="pr-5 flex justify-between items-center  ">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img
              src="./images/logo.webp"
              alt=""
              className="w-30 lg:w-auto   lg:h-30"
            />
          </NavLink>

          <div className="title flex flex-col gap-1 items-start justify-start my-6 ">
            <h1 className="Zilla w-full text-md md:text-3xl font-bold leading-6 lg:leading-8">
              INDIAN INSTITUTE OF MEDICAL SCIENCES, AYODHYA
            </h1>

            <h3 className="Barlow text-xs lg:text-sm ">
              Affiliated with Abdul Kalam Technical University and approved by
              the Government of Uttar Pradesh
            </h3>

            <ul className="Zilla my-4 lg:my-3 hidden md:flex items-center justify-start list-none gap-14 text-base font-bold">
              <li className="">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="">
                <NavLink to="/about-us">ABOUT US</NavLink>
              </li>
              <li className="">
                <NavLink to="/admissions">ADMISSIONS</NavLink>
              </li>
              <li className="">
                <NavLink to="/courses">COURSES</NavLink>
              </li>
              <li className="">
                <NavLink to="/gallery">GALLERY</NavLink>
              </li>
              <li className="">
                <NavLink to="/career">CAREER</NavLink>
              </li>
              <li className="">
                <NavLink to="/contact-us">CONTACT US</NavLink>
              </li>
            </ul>
          </div>

          <Mobileicon onClick={() => setisOpen(!isOpen)}>
            {/* <MenuRounded sx={{ color: "inherit" }} /> */}
            <span class="material-symbols-outlined">menu</span>
          </Mobileicon>
        </div>

        <ul className="Zilla hidden md:flex gap-4 text-sm font-bold">
          <li className="">
            <a href="">
              <img
                src="./images/erpIcon.webp"
                alt=""
                className="h-10 inline mr-2"
              />
              ERP LOGIN
            </a>
          </li>
          <li className="">
            <a href="">
              <img
                src="./images/loginIcon.webp"
                alt=""
                className="h-10 inline mr-2"
              />
              LOGIN
            </a>
          </li>
        </ul>
      </div>

      <MobileMenu
        isOpen={isOpen}
        className="lg:hidden  backdrop-blur-xl text-project-black bg-project-white  "
      >
        <li className="MobileMenuli ">
          <NavLink
            to="/"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            HOME
          </NavLink>
        </li>
        <li className="MobileMenuli ">
          <NavLink
            to="/about-us"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            ABOUT US
          </NavLink>
        </li>
        <li className="MobileMenuli ">
          <NavLink
            to="/admissions"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            ADMISSIONS
          </NavLink>
        </li>
        <li className="MobileMenuli ">
          <NavLink
            to="/courses"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            COURSES
          </NavLink>
        </li>
        <li className="MobileMenuli ">
          <NavLink
            to="/gallery"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            GALLERY
          </NavLink>
        </li>
        <li className="MobileMenuli ">
          <NavLink
            to="/career"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            CAREER
          </NavLink>
        </li>
        <li className="MobileMenuli ">
          <NavLink
            to="/contact-us"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            CONTACT US
          </NavLink>
        </li>
      </MobileMenu>

      <div className="hidden md:block">
        {/* <Button Content={"Lets Talk"} /> */}
        <NavLink to="/contact">
          {/* <Button
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          /> */}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
