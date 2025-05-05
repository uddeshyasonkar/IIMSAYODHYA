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
  top: 80px;
  left: 0;
  transition: all 0.4s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;

  box-shadow: rgba(255, 255, 255, 0.1) 0px 3px 10px,
    rgba(255, 255, 255, 0.2) 0px 6px 6px;
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
            <img src="./images/logo.webp" alt="" className="lg:h-36" />
          </NavLink>

          <div className="title flex flex-col gap-1 items-start justify-start mt-6">
            <h1 className="Zilla text-3xl font-bold">
              INDIAN INSTITUTE OF MEDICAL SCIENCES, AYODHYA
            </h1>

            <h3 className="Barlow text-sm ">
              Affiliated with Abdul Kalam Technical University and approved by
              the Government of Uttar Pradesh
            </h3>

            <ul className="Zilla mt-4 hidden md:flex items-center justify-start list-none gap-14 text-base font-bold">
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
        </div>

        <ul className="Zilla flex gap-4 text-sm font-bold">
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

      {/* <MobileMenu
        isOpen={isOpen}
        className="lg:hidden  backdrop-blur-xl text-white bg-black  "
      >
        <li className="">
          <NavLink
            to="/about"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            About
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/work"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Work
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/blog"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Blog
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/contact"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Contact
          </NavLink>
        </li>
      </MobileMenu> */}

      <div className="hidden md:block">
        {/* <Button Content={"Lets Talk"} /> */}
        <NavLink to="/contact">
          {/* <Button
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          /> */}
        </NavLink>
      </div>

      <Mobileicon onClick={() => setisOpen(!isOpen)}>
        {/* <MenuRounded sx={{ color: "inherit" }} /> */}
        <span class="material-symbols-outlined">menu</span>
      </Mobileicon>
    </nav>
  );
};

export default NavBar;
