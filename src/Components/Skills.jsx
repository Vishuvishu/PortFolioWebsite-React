import React from "react";
import "../Components/Global.css";
import html from "../Components/SocialLinks/html.png"
import css from "../Components/SocialLinks/social.png"
import js from "../Components/SocialLinks/js.png"
import react from "../Components/SocialLinks/react_original_logo_icon_146374.png"
import nodejs from "../Components/SocialLinks/nodejs.png"
import expressJs from "../Components/SocialLinks/Express.svg"
import mongodb from "../Components/SocialLinks/mongodb_original_logo_icon_146424.png"
import postman from "../Components/SocialLinks/postman_macos_bigsur_icon_189815.png"
import git from "../Components/SocialLinks/Git.png"
import tailwind from "../Components/SocialLinks/icons8-tailwind-css-48.png"
import github from "../Components/SocialLinks/github.png"
import bootstrap from "../Components/SocialLinks/icons8-bootstrap-48.png"
import flutter from "../Components/SocialLinks/flutter.svg"
import firebase from "../Components/SocialLinks/FireBase.svg"
import mysql from "../Components/SocialLinks/MySql.svg"
import tablue from "../Components/SocialLinks/Tablue.jpeg"
import shopify from "../Components/SocialLinks/Shopify.webp"
import android from "../Components/SocialLinks/Android.svg"
import docker from "../Components/SocialLinks/Docker.svg"
import figma from "../Components/SocialLinks/figma.new.png"
import powerbi from "../Components/SocialLinks/powerbi.png"


const Skills = ({ bgcolor, darkmode }) => {


  const skills =
    [
      { skill: "Flutter", png: flutter },
      { skill: "Android", png: android },
      { skill: "FireBase", png: firebase },
      { skill: "Nodejs", png: nodejs },
      { skill: "ExpressJs", png: expressJs },
      { skill: "ReactJs", png: react },
      { skill: "MongodDb", png: mongodb },
      { skill: "My Sql", png: mysql },
      { skill: "HTML", png: html },
      { skill: "Css", png: css },
      { skill: "Js", png: js },
      { skill: "Bootstrap", png: bootstrap },
      { skill: "Tailwind", png: tailwind },
    ]

  const otherSkills =
    [
      { skill: "Figma", png: figma },
      { skill: "Docker", png: docker },
      { skill: "Shopify", png: shopify },
      { skill: "Tablue", png: tablue },
      { skill: "Power bi", png: powerbi },

      { skill: "Git", png: git },
      { skill: "Github", png: github },
      { skill: "Postman", png: postman },

    ]


  return (
    <>
      <div
        className={` border-solid border-[3px]  ${darkmode === "dark" ? "bg-black border-[#4B3D10]" : "bg-white border-[#B7A261]"
          } ml-10 mr-10 p-10 rounded-lg flex flex-col gap-5 mb-10`}
      >
        <h1
          className={`text-2xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"
            }`}
        >
          Tech Stack
        </h1>

        <div className="w-full flex flex-wrap gap-y-[60px] gap-x-7">
          {
            skills.map((curr, i) =>
              <div key={i} className=" text-center rounded-lg w-[70px] h-[70px] rounded-lg shadow-custom border border-[#B7A261] ">
                <img src={curr.png} className="w-full p-2 mb-3 " />
                <h1 className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>{curr.skill}</h1>
              </div>)
          }
        </div>

        {/* cfccjcnwb nnjnjkjkknkjnjjnknjjknnjkjkjnnknknnknnnnnnjjknkjnnnnjkkjkkjknjnnkjnjnnnnnnnnkjnknnknknkjknjnjnnjnnjjkjknkjjknjnkjnkjnjnjnnjnjnjnk */}

        <h1
          className={`text-2xl font-bold pt-[56px] ${bgcolor === "white" ? "text-black" : "text-white"
            }`}
        >
          Tools & Software
        </h1>

        <div className="w-full flex flex-wrap gap-y-[60px] gap-x-7">
          {
            otherSkills.map((curr, i) =>
              <div key={i} className="text-center rounded-lg w-[70px] h-[70px] shadow-custom border border-[#B7A261] ">
                <img src={curr.png} className="w-full h-full p-2 mb-3 object-contain" />
                <h1 className={`font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>{curr.skill}</h1>
              </div>)
          }
        </div>


      </div>
    </>
  );
};

export default Skills;
