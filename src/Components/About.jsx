import React from "react";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { BsDatabaseDown } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { BiLogoFlutter } from "react-icons/bi";

import "../Components/Global.css";

const About = ({ bgcolor, darkmode }) => {
  return (
    <>
      <div className="ml-10 mr-10 mb-10">
        <div
          className={`border-solid border-[3px] ${
            darkmode === "dark"
              ? "bg-black border-[#4B3D10]"
              : "bg-white border-[#B7A261]"
          } p-10 rounded-lg`}
        >
          <h1
            className={`text-2xl font-bold ${
              bgcolor === "white" ? "text-black" : "text-white"
            }`}
          >
            About
          </h1>

          {/* Main Intro */}
          <p
            className="my-4"
            style={{
              color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
            }}
          >
            I am currently working as a{" "}
            <span
              className={`font-bold ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Software Development Engineer at IBM
            </span>
            .
            I hold a B.Tech in Information Technology from CSPIT, CHARUSAT.
            <br />
            <br />
            My core expertise lies in{" "}
            <span
              className={`font-bold ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Go, Java, Node.js, and PostgreSQL
            </span>
            . I actively work on workflow orchestration and scalable backend
            systems using{" "}
            <span
              className={`font-bold ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Temporal and Camunda Workflow Engine
            </span>
            , designing reliable and fault-tolerant architectures that
            handle distributed workloads efficiently.
            <br />
            <br />
            Alongside backend systems, I also have hands-on experience with{" "}
            <span
              className={`font-bold ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Next.js, React.js, MySQL, AWS deployments, and Three.js
            </span>
            , enabling me to contribute across full-stack applications and
            performance-critical environments.
          </p>

          {/* Achievements */}
          <p
            style={{
              color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
            }}
          >
            A significant milestone in my journey was securing{" "}
            <span
              className={`font-bold ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              3rd Rank at the IBM Interns Hackathon
            </span>{" "}
            during my internship. Additionally, my team ranked among the{" "}
            <span
              className={`font-bold ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Top 10 Teams at the IEEE Hackathon hosted at DAIICT,
              Gandhinagar
            </span>
            .
            <br />
            <br />
            Over time, I have developed a strong understanding of backend
            architecture, workflow orchestration, database optimization,
            system performance tuning, and frontend integration. allowing
            me to build scalable, reliable, and production-ready software
            systems.
          </p>

          <h1
            className="text-2xl my-5 italic"
            style={{
              color: `${bgcolor === "white" ? "#000000" : "white"}`,
            }}
          >
            What I Do
          </h1>

          <div className="flex gap-5 flex-wrap">
            {/* Backend */}
            <div
              className="w-80 flex gap-3 p-4 rounded-lg"
              style={{
                background: `${
                  bgcolor === "white" ? "#FDF4F4" : "#60594B"
                }`,
                border: `${
                  bgcolor === "white"
                    ? "1px solid #B7A261"
                    : "1px solid #60594B"
                }`,
              }}
            >
              <div>
                <BsDatabaseDown className="text-4xl my-2 text-green-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h1
                  className={`font-bold my-2 ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Backend Development
                </h1>
                <p
                  className="text-sm"
                  style={{
                    color: `${
                      bgcolor === "white" ? "#000000" : "#A6A6A6"
                    }`,
                  }}
                >
                  Designing scalable backend services using{" "}
                  <span className="font-bold">
                    Go, Java, Node.js, and PostgreSQL
                  </span>
                  . Experienced in workflow orchestration with{" "}
                  <span className="font-bold">
                    Temporal and Camunda
                  </span>
                  , building fault-tolerant and high-performance systems.
                </p>
              </div>
            </div>

            {/* Frontend */}
            <div
              className="w-80 flex gap-3 p-4 rounded-lg"
              style={{
                background: `${
                  bgcolor === "white" ? "#FDF4F4" : "#60594B"
                }`,
                border: `${
                  bgcolor === "white"
                    ? "1px solid #B7A261"
                    : "1px solid #60594B"
                }`,
              }}
            >
              <div>
                <AiOutlineLaptop className="text-4xl my-2 text-yellow-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1
                  className={`font-bold my-2 ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Modern Web Development
                </h1>
                <p
                  className="text-sm"
                  style={{
                    color: `${
                      bgcolor === "white" ? "#000000" : "#A6A6A6"
                    }`,
                  }}
                >
                  Building responsive and dynamic web applications using{" "}
                  <span className="font-bold">
                    React.js, Next.js, Tailwind CSS, and Three.js
                  </span>
                  , with deployment experience on AWS.
                </p>
              </div>
            </div>

            {/* UI/UX */}
            <div
              className="w-80 flex gap-3 p-4 rounded-lg"
              style={{
                background: `${
                  bgcolor === "white" ? "#FDF4F4" : "#60594B"
                }`,
                border: `${
                  bgcolor === "white"
                    ? "1px solid #B7A261"
                    : "1px solid #60594B"
                }`,
              }}
            >
              <div>
                <LiaSwatchbookSolid className="text-4xl my-2 text-purple-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1
                  className={`font-bold my-2 ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  UI/UX Designing
                </h1>
                <p
                  className="text-sm"
                  style={{
                    color: `${
                      bgcolor === "white" ? "#000000" : "#A6A6A6"
                    }`,
                  }}
                >
                  Creating intuitive, visually engaging user experiences by
                  translating complex requirements into clean and impactful
                  interface designs.
                </p>
              </div>
            </div>

            {/* Flutter */}
            <div
              className="w-80 flex gap-3 p-4 rounded-lg"
              style={{
                background: `${
                  bgcolor === "white" ? "#FDF4F4" : "#60594B"
                }`,
                border: `${
                  bgcolor === "white"
                    ? "1px solid #B7A261"
                    : "1px solid #60594B"
                }`,
              }}
            >
              <div>
                <BiLogoFlutter className="text-4xl my-2 text-blue-500" />
              </div>
              <div className="flex flex-col gap-1">
                <h1
                  className={`font-bold my-2 ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Flutter App Development
                </h1>
                <p
                  className="text-sm"
                  style={{
                    color: `${
                      bgcolor === "white" ? "#000000" : "#A6A6A6"
                    }`,
                  }}
                >
                  Developing cross-platform mobile applications using{" "}
                  <span className="font-bold">
                    Flutter and Firebase
                  </span>
                  , focusing on performance, real-time data, and seamless
                  backend integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;