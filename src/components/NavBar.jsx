import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);

  const [isOpen, setisOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <nav className="navbar fixed top-0 left-0 w-full h-max  flex justify-between flex-col  lg:justify-between z-40 bg-project-sec-red shadow-lg">
      <div className="px-4 flex justify-between items-center  ">
        <div className="w-full flex gap-4 items-center justify-start ">
          <NavLink to="/" className="hidden md:block">
            <img
              src="./images/finallogo.webp"
              alt=""
              className="w-25 h-15 lg:w-28 lg:h-24 "
            />
          </NavLink>

          {/* my-6 */}
          <div className="title w-full flex flex-col gap-1 items-start justify-start  my-4">
            <div className="w-full flex items-center justify-between ">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <NavLink to="/" className="block md:hidden ">
                    <img
                      src="./images/finallogo.webp"
                      alt=""
                      className="w-15 h-12 lg:w-28 lg:h-25 "
                    />
                  </NavLink>
                  <h1 className="Zilla w-full text-lg md:text-3xl font-bold leading-6 lg:leading-8">
                    INDIAN INSTITUTE OF MEDICAL SCIENCES, AYODHYA
                  </h1>
                </div>

                <div className="flex gap-0.5 flex-col">
                  <h3 className="Barlow hidden lg:block text-xs lg:text-sm ">
                    Affiliated with Abdul Kalam Technical University and
                    approved by the Government of Uttar Pradesh & Affiliated
                    with Indian nursing council
                  </h3>

                  <h3 className="Barlow lg:hidden block text-xs lg:text-sm ">
                    Affiliated with Abdul Kalam Technical University and
                    approved by the Government of Uttar Pradesh
                  </h3>
                  <h3 className="Barlow lg:hidden block text-xs lg:text-sm ">
                    Affiliated with Indian nursing council
                  </h3>

                  {/* <h4 className="Barlow text-[12px] lg:text-sm ">
                    Affiliated with Indian nursing council
                  </h4> */}
                </div>
              </div>
              <ul className="Zilla hidden md:flex gap-4 text-xs font-semibold">
                <li className="">
                  <a href="http://erp.iimsandhospital.com/" target="_blank">
                    <img
                      src="./images/erpIcon.webp"
                      alt=""
                      className="h-8 inline mr-2"
                    />
                    ERP LOGIN
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://iimsandhospital.com/Login.aspx"
                    target="_blank"
                  >
                    <img
                      src="./images/loginIcon.webp"
                      alt=""
                      className="h-8 inline mr-2"
                    />
                    LOGIN
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-full px-4">
              <ul className="Zilla my-4 lg:my-2 hidden md:flex items-center justify-start list-none gap-12 text-sm font-bold">
                <li className="">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-project-red text-base font-extrabold"
                        : "text-project-black font-bold"
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive
                        ? "text-project-red text-base font-extrabold"
                        : "text-project-black font-bold"
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/admissions"
                    className={({ isActive }) =>
                      isActive
                        ? "text-project-red text-base font-extrabold"
                        : "text-project-black font-bold"
                    }
                  >
                    ADMISSIONS
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      isActive
                        ? "text-project-red text-base font-extrabold"
                        : "text-project-black font-bold"
                    }
                  >
                    COURSES
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      isActive
                        ? "text-project-red text-base font-extrabold"
                        : "text-project-black font-bold"
                    }
                  >
                    GALLERY
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/career"
                    className={({ isActive }) =>
                      isActive
                        ? "text-project-red text-base font-extrabold"
                        : "text-project-black font-bold"
                    }
                  >
                    CAREER
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive
                        ? "text-project-red text-base font-extrabold"
                        : "text-project-black font-bold"
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>

              <div className="hidden md:block">
                <a
                  href="./IIMS Final Prospectus.pdf"
                  download
                  className="flex justify-center items-center gap-1 text-sm"
                >
                  Download Prospectus{" "}
                  <span class="material-symbols-outlined">download</span>
                </a>
              </div>
            </div>
          </div>

          <Mobileicon onClick={() => setisOpen(!isOpen)}>
            <span class="material-symbols-outlined">menu</span>
          </Mobileicon>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        className="lg:hidden  backdrop-blur-xl text-project-black bg-project-white  "
      >
        <li className="MobileMenuli ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-project-red text-base font-bold"
                : "text-project-black font-normal"
            }
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
            className={({ isActive }) =>
              isActive
                ? "text-project-red text-base font-bold"
                : "text-project-black font-normal"
            }
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
            className={({ isActive }) =>
              isActive
                ? "text-project-red text-base font-bold"
                : "text-project-black font-normal"
            }
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
            className={({ isActive }) =>
              isActive
                ? "text-project-red text-base font-bold"
                : "text-project-black font-normal"
            }
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
            className={({ isActive }) =>
              isActive
                ? "text-project-red text-base font-bold"
                : "text-project-black font-normal"
            }
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
            className={({ isActive }) =>
              isActive
                ? "text-project-red text-base font-bold"
                : "text-project-black font-normal"
            }
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
            className={({ isActive }) =>
              isActive
                ? "text-project-red text-base font-bold"
                : "text-project-black font-normal"
            }
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            CONTACT US
          </NavLink>
        </li>
        <li className="MobileMenuli ">
          <a
            href="http://erp.iimsandhospital.com/"
            onClick={() => {
              setisOpen(!isOpen);
            }}
            className="font-bold"
          >
            ERP LOGIN
          </a>
        </li>
        <li className="MobileMenuli ">
          <a
            href="https://iimsandhospital.com/Login.aspx"
            onClick={() => {
              setisOpen(!isOpen);
            }}
            className="font-bold"
          >
            LOGIN
          </a>
        </li>

        <li className="MobileMenuli ">
          <a
            href="./IIMS Final Prospectus.pdf"
            download
            className="flex justify-center items-center gap-1 text-sm font-bold"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Download Prospectus{" "}
            <span class="material-symbols-outlined">download</span>
          </a>
        </li>
      </MobileMenu>
    </nav>
  );
};

export default NavBar;
