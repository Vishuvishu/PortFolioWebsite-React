import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const yearLabel = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthLabel = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  return `${yearLabel}${yearLabel && monthLabel ? " " : ""}${monthLabel}`;
};

const responsibilities = {
  ibm1: [
    "Developed import/export capabilities within the DSL, allowing exported models to be re-imported by other tenants",
    "Optimized performance for orchestration engine",
  ],
  ibm2: [
    "Evaluated Temporal as alternate workflow orchestration engine",
    "Designed and implemented dynamic workflows in Temporal using Java and Go",
    "Created custom Domain-Specific Language (DSL) to model workflows intuitively",
    "Developed workflow editor UI using React Flow to explore DSL-driven workflow modeling",
    "Developed migration utility for bi-directional transformation between BPMN and custom DSL",
    "Worked as part of a team designing and implementing an AI-based tool to transform OpenAPI specifications into MCP tools",
  ],
  ibm3: [
    "Implemented Business Process Management (BPM) solutions using Camunda 8",
    "Evaluated Zeebe engine as alternative to Camunda engine",
    "Created migration plan from Camunda 7 to 8",
    "Developed Java-based REST and gRPC APIs",
    "Built migration utility to convert workflow models from Camunda 7 to 8",
    "Worked in Agile development environment",
  ],
  alakhnanda: [
    "Designed official website for company",
    "Created Figma wireframes and responsive layouts for client website",
    "Designed webpages for company product",
  ],
  scalot: [
    "Flutter App Development",
    "State Management with Flutter",
    "Interactive Widgets",
    "Responsive App development",
  ],
};

const Experiance = ({ bgcolor, darkmode }) => {
  const ibmStartDate = "2025-07-10";
  const ibmDuration = calculateDuration(ibmStartDate);

  const [expandedCompany, setExpandedCompany] = useState(null);
  const toggleExpand = (key) => {
    setExpandedCompany((prev) => (prev === key ? null : key));
  };

  const textColor = bgcolor === "white" ? "text-gray-900" : "text-gray-100";
  const borderColor = bgcolor === "white" ? "border-yellow-600" : "border-yellow-900";

  const renderCompany = (key, logo, name, role, duration) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl shadow-md cursor-pointer transition-all duration-300 border ${borderColor} bg-opacity-60 backdrop-blur-lg`}
      onClick={() => toggleExpand(key)}
    >
      <div className="flex items-center p-4">
        <div className="rounded-xl overflow-hidden w-[70px] h-[70px] flex-shrink-0 border border-gray-300">
          <img src={logo} className="object-contain w-full h-full" alt={name} />
        </div>
        <div className="ml-4 flex flex-col">
          <h3 className={`font-semibold text-lg ${textColor}`}>{name}</h3>
          <p className={`text-sm ${textColor}`}>Role: {role}</p>
          <p className="text-xs text-gray-500">{duration}</p>
        </div>
      </div>

      <AnimatePresence>
        {expandedCompany === key && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 pb-4"
          >
            <h4 className="font-medium mb-2 text-yellow-700">Responsibilities:</h4>
            <ul className={`list-disc pl-5 space-y-1 ${textColor}`}>
              {responsibilities[key].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="ml-10 mr-10 mb-10 h-fit">
      <div
        className={`p-10 rounded-2xl border-2 ${
          darkmode === "dark" ? "bg-black/70 border-yellow-900" : "bg-white border-yellow-600"
        } shadow-xl`}
      >
        {/* Education Section */}
        <h1 className={`text-2xl font-bold mb-6 ${textColor}`}>Education</h1>
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <div className={`p-5 rounded-xl border ${borderColor}`}>
            <p className="text-gray-500">2021 - 2025</p>
            <h2 className={`font-semibold ${textColor}`}>B.TECH ( IT ) – CSPIT, CHARUSAT</h2>
            <p className={`${textColor}`}>9.26 CGPA</p>
          </div>
          <div className={`p-5 rounded-xl border ${borderColor}`}>
            <p className="text-gray-500">2019 - 2020</p>
            <h2 className={`font-semibold ${textColor}`}>HSC – P.P.SAVANI, Surat</h2>
            <p className={`${textColor}`}>86%</p>
          </div>
        </div>

        {/* Experience Section */}
        <h1 className={`text-2xl font-bold mb-6 ${textColor}`}>Experience</h1>
        <div className="flex flex-col gap-5">
          {renderCompany("ibm1", ibmLogo, "IBM ( Pune )", "Software Developer Engineer", `July 2025 - Present (${ibmDuration})`)}
          {renderCompany("ibm2", ibmLogo, "IBM ( Pune )", "Software Developer Engineer Intern", `Jan 2025 - July 2025`)}
          {renderCompany("ibm3", ibmLogo, "IBM ( Ahmedabad )", "Software Developer Engineer Intern", `July 2024 - Jan 2025`)}
          {renderCompany("alakhnanda", Aldnddwww, "Alakhnanda InfoPlus", "UI/UX Designer Intern", "Dec 2023 - Apr 2024 (4 months)")}
          {renderCompany("scalot", scalotlight, "Scalot Technologies", "Flutter Developer Intern", "May 2023 - Jul 2023 (3 months)")}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
