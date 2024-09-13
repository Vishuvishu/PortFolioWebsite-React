import React from "react";
import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";

import "../Components/Global.css";
import Certificate from "./Skills";

const Experiance = ({ bgcolor, darkmode }) => {

  return (
    <>
      <div className="m-10 h-fit">
      <div className={` ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
        <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`} >Resume</h1>

        <div className="Education flex items-center gap-1 my-4">
          <IoBookOutline className="text-3xl text-blue-500" />
          <h1 className={`text-2xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Education</h1>
        </div>

        <div className="flex gap-4 flex-wrap ">
          <div
            className="ui-ux-design w-80 flex flex-col gap-2 p-4 rounded-lg"
            style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
          >
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}  >2021-2025</p>
            <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}  >B.TECH ( IT ) from CSPIT, CHARUSAT</h1>
            <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}>9.18 CGPA till 6th Sem</h1>
          </div>

          <div
            className="ui-ux-design w-80 flex flex-col gap-2 p-4 rounded-lg"
            style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
          >
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}  >2019-2020</p>
            <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}> HSC P.P.SAVANI, Surat</h1>
            <h1 style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}>86%</h1>
          </div>

        </div>

        <div>
          <div className="Education flex items-center gap-1 my-4">
            <IoBriefcaseOutline className="text-3xl text-blue-500" />
            <h1 className={`text-2xl my-2 font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Experiance </h1>
          </div>
        </div>
        <div className="flex-col gap-5 flex-wrap space-y-5">
          <div
            className="ui-ux-design w-120 flex flex-col gap-2 p-4 rounded-lg"
            style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}  ><b>Company:  IBM</b> </p>

            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}  ><b>Role:</b> Software Developer Engineer Intern</p>
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}><b>Duration:</b> July / 2024 - Jan / 2025 (6 month)</p>

          </div>
          <div
            className="ui-ux-design w-120 flex flex-col gap-2 p-4 rounded-lg"
            style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}><b>Company:   Alakhnanda InfoPlus</b> </p>

            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }} > <b>Role:</b> Ui/UX Designer Intern</p>
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}><b>Duration:</b> Oct / 2023 - Feb / 2024 (4 month)</p>
          </div>
          <div
            className="ui-ux-design w-120 flex flex-col gap-2 p-4 rounded-lg"
            style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}><b>Company:    Scalot Technolgoies</b> </p>

            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }} > <b>Role:</b> Flutter Developer Intern</p>
            <p style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}><b>Duration:</b> May / 2023 - Jun / 2023 (2 month)</p>
          </div>


        </div>

      </div>
      </div>
    </>
  );
};

export default Experiance;
