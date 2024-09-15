import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiFigma } from "react-icons/si";
import profilephotoimg from "../Components/SocialLinks/ProfilePhoto.jpg"
import "../Components/Global.css";
import cv from "../Components/SocialLinks/Resume.pdf";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaBlogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Profile = ({ show, setShow, darkmode, bgcolor, setCross }) => {

  const handleCross = () => {
    setCross(false)
    setShow(false)
  }

  return (
    <>
      {show ? (
        <div
          className={`${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
            } lg:w-11/12  md:w-8/12 sm:w-11/12 absolute sm:top-50 z-20`}
        >
          <NavLink to="/">
            <div
              onClick={handleCross}
              className={`bg-slate-200 rounded-lg flex items-center p-2 gap-1`}
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaRegUser className="text-xl" />
              <h1
                className={`text-sm my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              >
                About
              </h1>
            </div>
          </NavLink>


          <NavLink to="/Experiance">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <PiNotepad
                className={`text-xl my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              />
              <h1
                className={`text-sm my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              >
                Experiance
              </h1>
            </div>
          </NavLink>
          <NavLink to="/Skills">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <AiOutlineSafetyCertificate
                className={`text-xl my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              />
              <h1
                className={`text-sm my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              >
                Skills
              </h1>
            </div>
          </NavLink>

          <NavLink to="/Projects">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaLaptopCode
                className={`text-xl my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              />
              <h1
                className={`text-sm my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              >
                Projects
              </h1>
            </div>
          </NavLink>




          <NavLink to="/Contact">

            <div
              onClick={handleCross}

              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <TiContacts
                className={`text-xl my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              />
              <h1
                className={`text-sm my-1 ${bgcolor === "white" ? "text-black" : "text-white"
                  }`}
              >
                Contact
              </h1>
            </div>
          </NavLink>
        </div>


      ) : null}

      <div className="w-full flex justify-around">
        <div
          className={`lg:w-80 sm:w-96 h-12/12 rounded-lg p-10 flex flex-col items-center relative gap-8  ${darkmode === "dark" ? "bg-black" : "bg-white"
            }`}
        >
          <div className="w-40 h-40 rounded-full  image ">
            <img src={profilephotoimg} className="w-screen rounded-lg w-40 h-50 object-cover border-solid border-2 border-white " />
          </div>
          <h1
            className={`text-2xl font-bold relative lg:top-20 sm:top-24 ${bgcolor === "white" ? "text-black" : "text-white"
              }`}
          >
            Vishu K Bhingradiya
          </h1>
          <div
            className="passion h-8 p-2 relative lg:top-12 sm:top-20 inline-block"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <h1
              className="text-center whitespace-nowrap text-sm"
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              MERN + Flutter Dev.
            </h1>
          </div>


          <div className=" w-96 p-2 flex gap-2 justify-center relative lg:top-10 sm:top-14">
            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <a href="https://www.instagram.com/vishu_bhingradiya/" target="#">
                {" "}
                <FaInstagram className="text-2xl text-red-400   fw-bold text-[#64748b]" />{" "}
              </a>
            </div>

            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <a href="https://in.linkedin.com/in/vishu-k-bhingradiya-667668229">
                {" "}
                <FaLinkedin className="text-2xl text-blue-600  fw-bold text-[#64748b]" />{" "}
              </a>
            </div>

            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`
              }}
            >
              <a href="https://github.com/vishuvishu" target="#">
                {" "}

{/*                 <AiFillGithub className={`text-2xl text-black  fw-bold  ${bgcolor === "white" ? "text-black" : "text-white"}`} */}
  <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma Logo"
            className="w-6 h-6"
          />
                />{" "}
              </a>
            </div>
            <div
        className="figma w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500 bg-slate-100"
        style={{
          background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
        }}
      >
        <a href="https://www.figma.com/@vishukishorbhai" target="#">
          <SiFigma
            className="text-2xl"
            style={{
              color: "#F24E1E", // Figma's red color for the top part
            }}
          />
        </a>
      </div>

          </div>
         
           
          <div
            className="w-68  p-4 flex flex-col gap-2 rounded-lg relative top-8"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <div
              className={`flex  items-center gap-2 ${bgcolor === "white"
                ? "border-b border-grey-200 p-1"
                : "border-b border-slate-500"
                }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-white" : "bg-black"
                  } rounded-lg  hover:bg-black`}
              >
                <CiMobile4 className="text-2xl text-[#64748b] " />
              </div>

              <div className="phone">
                <a href="tel:7861044740">
                  <h1
                    className={`${bgcolor === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    +91 78610 44740
                  </h1>
                </a>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${bgcolor === "white"
                ? "border-b border-grey-200 p-1"
                : "border-b border-slate-500"
                }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-white" : "bg-black"
                  } rounded-lg  hover:bg-black `}
              >
                <AiTwotoneMail className="text-2xl text-[#64748b] " />
              </div>

              <div className="phone">
                <a href="mailto:vishunkkb.dev@gmail.com">
                  <h1
                    className={`${bgcolor === "white" ? "text-black" : "text-white"
                      } text-sm sm:text-sm`}
                  >
                    vishunkkb.dev@gmail.com
                  </h1>
                </a>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${bgcolor === "white"
                ? "border-b border-grey-200 p-1"
                : "border-b border-slate-500"
                }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-white" : "bg-black"
                  } rounded-lg  hover:bg-black `}
              >
                <IoLocationSharp className="text-2xl text-[#64748b] " />
              </div>

              <div className="phone">
                <h1
                  className={`${bgcolor === "white" ? "text-black" : "text-white"
                    }`}
                >
                  Gujarat,India
                </h1>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${bgcolor === "white"
                ? "border-b border-grey-200 p-1"
                : "border-b border-slate-500"
                }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-white" : "bg-black"
                  } rounded-lg  hover:bg-black`}
              >
                <BsCalendarDate className="text-2xl text-[#64748b] " />
              </div>

              <div className="phone">
                <h1
                  className={`${bgcolor === "white" ? "text-black" : "text-white"
                    }`}
                >
                  12 Nov. 2003
                </h1>
              </div>
            </div>
          </div>
          <div className="flex relative top-5">
            <button className={`${bgcolor === "white" ? "bg-black text-white" : "bg-white text-black"}   flex items-center rounded-lg justify-center p-2 text-md text-nowrap w-36 h-10`}>
              {/* <a href={cv} download="Resume" className="flex"> */}
              <a href={"https://drive.google.com/file/d/1JVNneRNr845-oGLpgPgjUsmkEmH5Q0e-/view?usp=sharing"} className="flex gap-2">

                <AiOutlineEye className="text-2xl " />
                {" "}
                <p>View CV</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
