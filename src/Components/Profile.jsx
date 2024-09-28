import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile1, CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { BsMedium } from "react-icons/bs";
import { MdDateRange, MdOutlineFileDownload } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import profilephotoimg from "../Components/SocialLinks/ProfilePhoto.jpg"
import "../Components/Global.css";
import figma from "../Components/SocialLinks/figma.new.png";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../index.css";
import { LuMail } from "react-icons/lu";

const Profile = ({ show, setShow, darkmode, bgcolor, setCross }) => {

  const handleCross = () => {
    setCross(false)
    setShow(false)
  }

  return (
    <>
      {show ? (
        <div
          className={`${darkmode === "dark" ? `bg-${bgcolor} ` : `bg-white`
            } lg:w-11/12  md:w-8/12 sm:w-11/12  sm:top-50 z-20 fixed `}
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
          className={`lg:w-80 sm:w-96 h-12/12 rounded-lg p-10 flex flex-col items-center relative gap-8 border-solid border-2 border-[#B7A261] ${darkmode === "dark" ? "bg-black border-[#4B3D10]" : "bg-white"
            }`}
        >
          <div className="w-40 h-40 rounded-full  image ">
            <img src={profilephotoimg} className={`w-screen rounded-lg w-40 h-50 object-cover border-solid border-4 border-[#B7A261] `} />
          </div>
          <h1
            className={`text-xl font-bold relative lg:top-20 sm:top-24 ${bgcolor === "white" ? "text-black" : "text-[#CCC0C0]"
              }`}
          >
            Vishu K Bhingradiya
          </h1>
          <div
            className="passion p-2 mt-2 relative lg:top-12 sm:top-20 text-sm w-70"
            style={{
              color: `${bgcolor === "white" ? "#000000" : "#CCC0C0"}`,
            }}
          >
            <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}> {/* Explicitly set bullet points and indentation */}
              <li style={{ marginBottom: '5px' }}>Flutter Mobile Developer</li>
              <li style={{ marginBottom: '5px' }} >MERN Web - Full Stack Developer</li>
              <li >UI/UX Designer</li>
            </ul>
          </div>



          <div className=" flex gap-2 justify-center relative lg:top-6 sm:top-8">
            <div
              className={`insta w-8 h-8  flex justify-center items-center rounded-lg border border-[#E77975] hover:shadow-sm ${darkmode === "dark" ? "hover:shadow-white" : "hover:shadow-black"} transition-colors duration-500`}
            >
              <a href="https://www.instagram.com/vishu_bhingradiya/" target="#">
                {" "}
                <FaInstagram className="text-2xl text-red-400   fw-bold text-[#64748b]" />{" "}
              </a>
            </div>

            <div
              className={`insta w-8 h-8  flex justify-center items-center rounded-lg border border-[#3662E3] hover:shadow-sm ${darkmode === "dark" ? "hover:shadow-white" : "hover:shadow-black"} transition-colors duration-500`}
            >
              <a href="https://in.linkedin.com/in/vishu-k-bhingradiya-667668229">
                {" "}
                <FaLinkedin className="text-2xl text-blue-600  fw-bold text-[#64748b]" />{" "}
              </a>
            </div>

            <div
              className={`insta w-8 h-8  flex justify-center items-center rounded-lg border ${bgcolor === "white" ? "border-[#000000]" : "border-[#CCC0C0]"} border-[#000000] hover:shadow-sm ${darkmode === "dark" ? "hover:shadow-white" : "hover:shadow-black"}  `}
            >
              <a href="https://github.com/vishuvishu" target="#">
                {" "}

                <AiFillGithub className={`text-2xl text-black  fw-bold  ${bgcolor === "white" ? "text-black" : "text-white"}`}

                />{" "}
              </a>
            </div>
            <div
              className={`figma  flex justify-center items-center rounded-lg border `}
              class="gradient-border custom-element"

            >
              <div className={bgcolor === "white" ? "bg-white1" : "bg-black1"}>

                <a href="https://www.figma.com/@vishukishorbhai" target="#">
                  {/*           <SiFigma
            className="text-2xl"
            style={{
              color: "#F24E1E", // Figma's red color for the top part
            }}
          /> */}
                  <img
                    src={figma}
                    alt="Figma Logo"
                    className=" bg-cover w-[4.5] h-6"
                  />

                </a>
              </div>
            </div>
            <div
              className={` w-8 h-8 flex justify-center items-center rounded-lg border  ${bgcolor === "white" ? "border-[#000000]" : "border-[#CCC0C0]"} hover:bg-gold hover:shadow-sm ${darkmode === "dark" ? "hover:shadow-white" : "hover:shadow-black"}  `}

            >
              <a href="https://medium.com/@FingerPrintBlogs" target="#">
                {" "}

                <BsMedium className={`text-2xl text-black fw-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}

                />{" "}
              </a>
            </div>
          </div>


          <div
            className="w-68  p-4 flex flex-col gap-2 rounded-lg relative top-5"
            style={{
              background: `${bgcolor === "white" ? "#F9F6EA" : "#3B3729"}`,
            }}
          >
            <div
              className={`flex  items-center gap-2 pb-1.5 ${bgcolor === "white"
                ? "border-b border-grey-200"
                : "border-b border-slate-500"
                }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-[#D9D9D9]" : "bg-[#000000]"
                  } rounded-lg  `}
              >
                <CiMobile1 className={`text-2xl ${bgcolor == "white" ? "text-[#000000]" : "text-[#CCC0C0]"} `} />
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
              className={`flex  items-center gap-2 pb-1.5 ${bgcolor === "white"
                ? "border-b border-grey-200"
                : "border-b border-slate-500"
                }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-[#D9D9D9]" : "bg-[#000000]"
                  } rounded-lg  `}
              >
                <LuMail className={`text-2xl text-[#64748b] ${bgcolor == "white" ? "text-[#000000]" : "text-[#CCC0C0]"} `} />
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
              className={`flex  items-center gap-2 pb-1.5 ${bgcolor === "white"
                ? "border-b border-grey-200"
                : "border-b border-slate-500"
                }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-[#D9D9D9]" : "bg-[#000000]"
                  } rounded-lg  `}
              >
                <IoLocationSharp className={`text-2xl text-[#64748b] ${bgcolor == "white" ? "text-[#000000]" : "text-[#CCC0C0]"}`} />
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
              className={`flex  items-center gap-2 `}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${bgcolor == "white" ? "bg-[#D9D9D9]" : "bg-[#000000]"
                  } rounded-lg  `}
              >
                <MdDateRange className={`text-2xl text-[#64748b] ${bgcolor == "white" ? "text-[#000000]" : "text-[#CCC0C0]"}`} />
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
            <button className={`${bgcolor === "white" ? "bg-[#B7A261]" : "bg-[#C2B293] "}   flex items-center rounded-lg justify-center p-2 text-lg text-nowrap w-36 h-10`}>
              {/* <a href={cv} download="Resume" className="flex"> */}
              <a href={"https://drive.google.com/file/d/1JVNneRNr845-oGLpgPgjUsmkEmH5Q0e-/view?usp=sharing"} className="flex gap-2 text-[#3B3729] ">
                {" "}
                <p><b>View Resume</b></p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
