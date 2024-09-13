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
      <div className="m-10">
      <div className={` ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
        <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Projects</h1>
        <div className="flex gap-5 flex-wrap my-5">
          <a href="#">
            <div
              className="ui-ux-design w-80 h-50 flex flex-col gap-3 p-5 rounded-lg"
              style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
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
              style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
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
              style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
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
              style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
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
              style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
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
              style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
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

