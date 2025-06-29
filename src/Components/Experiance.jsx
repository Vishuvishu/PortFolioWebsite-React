import React, { useState } from "react";
import ibmLogo from "../Components/SocialLinks/ibm.png";
import Aldnddwww from "../Components/SocialLinks/AlkhnandaInfoLogo.png";
import scalotlight from "../Components/SocialLinks/scalotlight.png";
import "../Components/Global.css";

const calculateDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearLabel = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : "";
  const monthLabel = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : "";

  return `${yearLabel}${yearLabel && monthLabel ? ' ' : ''}${monthLabel}`;
};

const responsibilities = {
  ibm2: [
    "Evaluated Temporal as alternate workflow orchestration engine",
    "Designed and implemented dynamic workflows in Temporal using Java and Go",
    "Created custom Domain-Specific Language (DSL) to model workflows intuitively",
    "Developed workflow editor UI using React Flow to explore DSL-driven workflow modeling",
    "Developed migration utility for bi-directional transformation between BPMN and custom DSL",
    "Optimized performance for orchestration engine"
  ],
  ibm3: [
    "Implemented Business Process Management (BPM) solutions using camunda 8",
    "Evaluated Zeebe engine as alternative to Camunda engine",
    "Created migration plan from camunda 7 to 8",
    "Worked with Java REST and gRPC APIs",
    "Developed Java-based REST and gRPC APIs",
    "Built migration utility to convert workflow models from Camunda 7 to 8",
    "Business Process Management using Camunda",
    "Worked in Agile development environment"
  ],
  alakhnanda: [
    "Designed Official website for company",
    "Created Figma wireframes and responsive layouts for client website",
    "Designed webpages for company product",
  ],
  scalot: [
    "Flutter App Development",
    "State Management flutter",
    "Interactive Widgets",
    "Responsive App development"
  ],
};

const Experiance = ({ bgcolor, darkmode }) => {
  const ibmStartDate = "2025-07-10";
  const ibmDuration = calculateDuration(ibmStartDate);

  const [expandedCompany, setExpandedCompany] = useState(null);
  const toggleExpand = (key) => {
    setExpandedCompany(prev => (prev === key ? null : key));
  };

  const textColor = bgcolor === "white" ? "#000000" : "#FDFAF0";
  const borderColor = bgcolor === "white" ? "#B7A261" : "#4B3D10";

  const renderCompany = (key, logo, name, role, duration) => (
    <div
      className="flex flex-col rounded-lg cursor-pointer"
      onClick={() => toggleExpand(key)}
      style={{ border: `2px solid ${borderColor}` }}
    >
      <div className="flex items-center">
        <div
          className="rounded-lg w-[80px] h-[80px] ml-[15px]"
          style={{ border: `2px solid ${borderColor}` }}
        >
          <img src={logo} className="rounded-lg" />
        </div>
        <div className="ui-ux-design flex flex-col gap-1 p-4">
          <p style={{ color: textColor }}><b>Company: {name}</b></p>
          <p style={{ color: textColor }}><b>Role:</b> {role}</p>
          <p style={{ color: textColor }}><b>Duration:</b> {duration}</p>
        </div>
      </div>

      {expandedCompany === key && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCompany === key ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } p-4 pt-0 pl-5 text-sm`}>
          <h4 className="font-semibold mb-1" style={{ color: textColor }}>Responsibilities:</h4>
          <ul className="list-disc ml-4" style={{ color: textColor }}>
            {responsibilities[key].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

      )}
    </div>
  );

  return (
    <div className="ml-10 mr-10 mb-10 h-fit">
      <div className={`border-solid border-[3px] ${darkmode === "dark" ? "bg-black border-[#4B3D10]" : "bg-white border-[#B7A261]"} p-10 rounded-lg`}>
        {/* Education Section */}
        <div className="Education flex items-center mb-4">
          <h1 className={`text-xl font-bold ${bgcolor === "white" ? "text-black" : "text-[#FDFAF0]"}`}> Education</h1>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="ui-ux-design flex-grow flex flex-col gap-2 p-4 rounded-lg" style={{ border: `3px solid ${borderColor}` }}>
            <p style={{ color: textColor }}>2021-2025</p>
            <h1 style={{ color: textColor }}><b>B.TECH ( IT ) from CSPIT, CHARUSAT</b></h1>
            <h1 style={{ color: textColor }}><b>9.26 CGPA</b></h1>
          </div>
          <div className="ui-ux-design flex-grow flex flex-col gap-2 p-4 rounded-lg" style={{ border: `3px solid ${borderColor}` }}>
            <p style={{ color: textColor }}>2019-2020</p>
            <h1 style={{ color: textColor }}><b>HSC P.P.SAVANI, Surat</b></h1>
            <h1 style={{ color: textColor }}><b>86%</b></h1>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="Education flex items-center gap-1 my-4">
            <h1 className={`text-xl my-2 font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Experience </h1>
          </div>
        </div>

        <div className="flex-col gap-5 flex-wrap space-y-5">
          {renderCompany("ibm2", ibmLogo, "IBM ( PUNE )", "Software Developer Engineer Intern", `Jan / 2025 - Present (${ibmDuration})`)}
          {renderCompany("ibm3", ibmLogo, "IBM ( AHMEDABAD )", "Software Developer Engineer Intern", `July / 2024 - Jan / 2025`)}
          {renderCompany("alakhnanda", Aldnddwww, "Alakhnanda InfoPlus", "UI/UX Designer Intern", "Dec / 2023 - Apr / 2024 (4 months)")}
          {renderCompany("scalot", scalotlight, "Scalot Technologies", "Flutter Developer Intern", "May / 2023 - Jul / 2023 (3 months)")}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
