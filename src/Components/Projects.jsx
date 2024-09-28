import React from "react";
import "../Components/Global.css";
import finedine from "../Components/SocialLinks/FineDine.png"
import freshstartguide from "../Components/SocialLinks/FreshStartGuide.webp"
import waterDelivery from "../Components/SocialLinks/WaterDelivery.png"
import rentyourplace from "../Components/SocialLinks/rentyourplace.png"
import wallifyy from "../Components/SocialLinks/Wallifyy.png"
import industrymetric from "../Components/SocialLinks/industrymetr.png"


const Projects = ({ bgcolor, darkmode }) => {
  return (
    <>
      <div className="ml-10 mr-10 mb-10 ">
        <div className={`border-solid border-2 border-[#B7A261] ${darkmode === "dark" ? "bg-black border-[#4B3D10]" : "bg-white"
          }  p-10 rounded-lg`}>
          <h1 className={`text-2xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Projects</h1>
          <div className="flex gap-5 flex-wrap my-5">
            <a href="#">
              <div
                className="ui-ux-design w-80 h-50 flex flex-col gap-3 p-5 rounded-lg"
                style={{ background: `${bgcolor === "white" ? "#F9F6EA" : "#403D32"}`, border: `${bgcolor === "white" ? "1px solid #B7A261" : "1px solid #403D32"}` }}
              >
                <img
                  src={finedine}
                  className="rounded-lg transition delay-150 object-cover border-solid border-2 border-black "
                />
                <div>
                  <h1 className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Resto Mania (Flutter)</h1>
                </div>
              </div>
            </a>
            <a href="#">
              <div
                className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
                style={{ background: `${bgcolor === "white" ? "#F9F6EA" : "#403D32"}`, border: `${bgcolor === "white" ? "1px solid #B7A261" : "1px solid #403D32"}` }}
              >
                <img
                  src={freshstartguide}
                  className="rounded-lg transition delay-150  object-cover border-solid border-2 border-black"
                />
                <div>
                  <h1 className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Fresh Start Guide (Reactjs,Nodejs,Expressjs)</h1>
                </div>
              </div>
            </a>
            <a href="#">
              <div
                className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
                style={{ background: `${bgcolor === "white" ? "#F9F6EA" : "#403D32"}`, border: `${bgcolor === "white" ? "1px solid #B7A261" : "1px solid #403D32"}` }}>
                <img
                  src={rentyourplace}
                  className="rounded-lg transition delay-150 border-solid border-2 border-blue-800 "
                />
                <div>
                  <h1 className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Rent Your Place (HTML + Js + PHP) </h1>
                </div>
              </div>
            </a>
            <a href="#">
              <div
                className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
                style={{ background: `${bgcolor === "white" ? "#F9F6EA" : "#403D32"}`, border: `${bgcolor === "white" ? "1px solid #B7A261" : "1px solid #403D32"}` }}
              >
                <img
                  src={wallifyy}
                  className="rounded-lg transition delay-150 border-solid border-2 border-blue-800 "
                />
                <div>
                  <h1 className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}> Wallpaper App (Flutter)</h1>
                </div>
              </div>
            </a>
            <a href="#">
              <div
                className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
                style={{ background: `${bgcolor === "white" ? "#F9F6EA" : "#403D32"}`, border: `${bgcolor === "white" ? "1px solid #B7A261" : "1px solid #403D32"}` }}
              >
                <img
                  src={industrymetric}
                  className="rounded-lg transition delay-150 border-solid border-2 border-blue-800 "
                />
                <div>
                  <h1 className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>IndustriMetric (Flutter + Appscript(Sheets))</h1>
                </div>
              </div>
            </a>
            <a href="#">
              <div
                className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
                style={{ background: `${bgcolor === "white" ? "#F9F6EA" : "#403D32"}`, border: `${bgcolor === "white" ? "1px solid #B7A261" : "1px solid #403D32"}` }}
              >
                <img
                  src={waterDelivery}
                  className="rounded-lg transition delay-150 border-solid border-2 border-blue-800 "
                />
                <div>
                  <h1 className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Water Delivery App (Flutter)</h1>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

