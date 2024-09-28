import React from "react";
import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import ibmLogo from "../Components/SocialLinks/ibm.png";
import Aldnddwww from "../Components/SocialLinks/AlkhnandaInfoLogo.png";
import scalot from "../Components/SocialLinks/Scalotdswdwd.png";
import scalotlight from "../Components/SocialLinks/scalotlight.png";
import "../Components/Global.css";
import Certificate from "./Skills";

const Experiance = ({ bgcolor, darkmode }) => {

  return (
    <>
      <div className="ml-10 mr-10 mb-10 h-fit">
        <div className={` border-solid border-[3px]  ${darkmode === "dark" ? "bg-black border-[#4B3D10]" : "bg-white border-[#B7A261]"
          }  p-10 rounded-lg `}>
          <div className="Education flex items-center  mb-4">
            <h1 className={`text-xl font-bold ${bgcolor === "white" ? "text-black" : "text-[#FDFAF0]"}`}> Education</h1>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div
              className="ui-ux-design flex-grow flex flex-col gap-2 p-4 rounded-lg "
              style={{ border: `${bgcolor === "white" ? "3px solid #B7A261" : "3px solid #4B3D10"}` }}
            >
              <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}  >2021-2025</p>
              <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}> <b> B.TECH ( IT ) from CSPIT, CHARUSAT </b> </h1>
              <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>9.18 CGPA</b> till 6th Sem</h1>
            </div>

            <div
              className="ui-ux-design flex-grow flex flex-col gap-2 p-4 rounded-lg"
              style={{ border: `${bgcolor === "white" ? "3px solid#B7A261" : "3px solid #4B3D10"}` }}
            >
              <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}  >2019-2020</p>
              <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b> HSC P.P.SAVANI, Surat </b></h1>
              <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>86%</b></h1>
            </div>

          </div>

          <div>
            <div className="Education flex items-center gap-1 my-4">
              <h1 className={`text-xl my-2 font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Experiance </h1>
            </div>
          </div>
          <div className="flex-col gap-5 flex-wrap space-y-5">
            <div className="flex flex-nowrap w-[120] rounded-lg items-center" style={{ border: `${bgcolor === "white" ? "3px solid #B7A261" : "2px solid #4B3D10"}` }}>

              {/* IBM Logo Container */}
              <div className="  rounded-lg w-[80px] h-[80px] ml-[15px]" style={{ border: `${bgcolor === "white" ? "3px solid #B7A261" : "2px solid #4B3D10"}` }}>

                <img src={ibmLogo} className="rounded-lg" />
              </div>

              {/* Text Information */}
              <div className="ui-ux-design flex flex-col gap-1 p-4">
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>Company: IBM</b></p>
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>Role:</b> Software Developer Engineer Intern</p>
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>Duration:</b> July / 2024 - Jan / 2025 (6 months)</p>
              </div>
            </div>

            <div className="flex flex-nowrap w-[120] rounded-lg items-center" style={{ border: `${bgcolor === "white" ? "3px solid #B7A261" : "2px solid #4B3D10"}` }}>

              <div className="rounded-lg   w-[80px] h-[80px] ml-[15px]      " style={{ border: `${bgcolor === "white" ? "3px solid #B7A261" : "2px solid #4B3D10"}` }}>
                <img src={Aldnddwww} className="rounded-lg" />
              </div>
              <div
                className="ui-ux-design w-120 flex flex-col gap-1 p-4 "
              >
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>Company:   Alakhnanda InfoPlus</b> </p>
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }} > <b>Role:</b> Ui/UX Designer Intern</p>
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>Duration:</b> Oct / 2023 - Feb / 2024 (4 month)</p>
              </div>
            </div>
            <div className="flex flex-nowrap w-[120] rounded-lg items-center" style={{ border: `${bgcolor === "white" ? "3px solid #B7A261" : "2px solid #4B3D10"}` }}>

              <div className="rounded-lg  w-[80px] h-[80px] ml-[15px] " style={{ border: `${bgcolor === "white" ? "3px solid #B7A261" : "2px solid #4B3D10"}`, }}>
                <img src={scalotlight} className="rounded-lg" />
              </div>
              <div
                className="ui-ux-design w-120 flex flex-col gap-1 p-4 "
              >
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>Company:    Scalot Technolgoies</b> </p>
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }} > <b>Role:</b> Flutter Developer Intern</p>
                <p style={{ color: `${bgcolor === "white" ? "#000000" : "#FDFAF0"}` }}><b>Duration:</b> May / 2023 - Jun / 2023 (2 month)</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  );
};

export default Experiance;
