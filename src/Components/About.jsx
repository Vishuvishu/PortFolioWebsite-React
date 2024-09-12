import React from "react";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { BsDatabaseDown } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { BiLogoFlutter } from "react-icons/bi";


import "../Components/Global.css"

const About = ({ bgcolor, darkmode }) => {
  return (
    <>
      <div className="relative h-full">
        <div className={`${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`} >About</h1>
          <p className="my-4  "
            style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
          >
            I am a <span className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> passionate tech enthusiast </span>with a deep interest in <span className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Web and App Development.</span>
            Currently, I am pursuing a B.Tech in Information Technology at CSPIT, CHARUSAT,
            and am gaining valuable experience as an  <span className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>SDE Intern at IBM.</span> I possess expertise in <span className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Flutter Development, UI/UX Design, React.js, and Tailwind CSS</span> for web development, as well as <span className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Node.js and Express.js </span>for robust backend solutions.
            <br />{" "}
          </p>

          <p
            style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
          >
            Noteworthy Achievement of my carear is ranking in <span className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Top 10 Teams at hackathon </span> hosted by<span className="font-bold">  IEEE </span>SB at DAIICT, Gandhinagar.
            As UI/UX Designer my several apps and websites designs are currently in used in production.
            <br /><br />{" "}
            Additionally, I have did internship as Flutter Developer, UI/UX Designer and Java Developer.
            <br />This diverse experience has provided me with a holistic <span className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>understanding on front-end and back-end technologies, as well as user experience,</span> allowing me to make meaningful contributions across various facets of technology projects.
          </p>
          <h1 className="text-2xl my-5 font-italic"
            style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}
          >What I DO!</h1>

          <div className="flex gap-5 flex-wrap ">
            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
              <div>
                <AiOutlineLaptop className="text-4xl my-2 text-yellow-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}>Web Frontend Development</h1>
                <p className="text-sm"
                  style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                >
                  With a robust proficiency in <span className="font-bold">React.js</span>. I excel at transforming design concepts into dynamic, user-friendly websites.
                </p>
              </div>
            </div>

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
              <div>
                <LiaSwatchbookSolid className="text-4xl my-2 text-purple-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}>UI/UX Designing</h1>
                <p className="text-sm"
                  style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                >
                  With strong expertise in UI/UX design, I excel at creating <span className="font-bold">intuitive and visually engaging user experiences,</span> translating user needs into seamless, impactful Designs.                </p>
              </div>
            </div>

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
              <div>
                <BsDatabaseDown className="text-4xl my-2 text-green-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}>Backend Developement</h1>
                <p className="text-sm"
                  style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                >
                  Skilled in <span className="font-bold">Node.js, Express.js, Java</span> I build scalable backend systems and efficient server-side solutions using databases like  <span className="font-bold">MongoDB and MySQL</span> for dynamic applications.                </p>
              </div>
            </div>

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
              <div>
                <BiLogoFlutter className="text-4xl my-2 text-blue-500" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}>Flutter App Development</h1>
                <p className="text-sm"
                  style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                >
                  Proficient in <span className="font-bold">Flutter and Firebase,</span> I build cross-platform, high-performance mobile apps with real-time data and seamless backend integration.                             </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default About;
