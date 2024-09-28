import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Navbar = ({ bgcolor, darkmode }) => {
  return (
    <>
      <nav className={`lg:block sm:hidden h-full border-[3px] mt-40 rounded-lg ${darkmode === "dark" ? "bg-black border-[#4B3D10]" : "bg-white border-[#B7A261]"} `}>
        <div
          className={`w-24 rounded-lg p-5 flex flex-col items-center gap-2`}
        >
          <NavLink to="/" exact>
            {({ isActive }) => (
              <div
                className={`w-16 rounded-lg flex flex-col justify-center items-center p-2 ${isActive ? "bg-[#B7A261] text-[#000000]" : bgcolor === "white" ? "bg-[#FEF6DD] text-black" : "bg-[#3B3729] text-[#A89D9D]"
                  } focus:outline-none `}
              >
                <FaRegUser className="text-2xl" />
                <h1 className="text-xs">About</h1>
              </div>
            )}
          </NavLink>

          <NavLink to="/Experiance">
            {({ isActive }) => (
              <div
                className={`w-16 rounded-lg flex flex-col items-center p-2 ${isActive ? "bg-[#B7A261] text-[#000000]" : bgcolor === "white" ? "bg-[#FEF6DD] text-black" : "bg-[#3B3729] text-[#A89D9D]"
                  } focus:outline-none`}
              >
                <PiNotepad className="text-2xl" />
                <h1 className="text-xs">Experiance</h1>
              </div>
            )}
          </NavLink>

          <NavLink to="/Projects">
            {({ isActive }) => (
              <div
                className={`w-16 rounded-lg flex flex-col justify-center items-center p-2 ${isActive ? "bg-[#B7A261] text-[#000000]" : bgcolor === "white" ? "bg-[#FEF6DD] text-black" : "bg-[#3B3729] text-[#A89D9D]"
                  } focus:outline-none`}
              >
                <FaLaptopCode className="text-2xl" />
                <h1 className="text-xs">Projects</h1>
              </div>
            )}
          </NavLink>

          <NavLink to="/Skills">
            {({ isActive }) => (
              <div
                className={`w-16 rounded-lg flex flex-col justify-center items-center p-2 ${isActive ? "bg-[#B7A261] text-[#000000]" : bgcolor === "white" ? "bg-[#FEF6DD] text-black" : "bg-[#3B3729] text-[#A89D9D]"
                  } focus:outline-none`}
              >
                <AiOutlineSafetyCertificate className="text-2xl" />
                <h1 className="text-xs p-1">Skills</h1>
              </div>
            )}
          </NavLink>

          <NavLink to="/Contact">
            {({ isActive }) => (
              <div
                className={`w-16 rounded-lg flex flex-col justify-center items-center p-2 ${isActive ? "bg-[#B7A261] text-[#000000]" : bgcolor === "white" ? "bg-[#FEF6DD] text-black" : "bg-[#3B3729] text-[#A89D9D]"
                  } focus:outline-none`}
              >
                <TiContacts className="text-2xl" />
                <h1 className="text-xs">Contact</h1>
              </div>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
