import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MdLightbulb } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";

import "../Components/Global.css"
import theme from "../theme.js";
const ForMobile = ({ show, setShow, handleDarkMode, darkmode, cross, handleclick, handleremove }) => {



  return (
    <>
      <div className='for-mobile w-screen flex items-center'>
        <div className='w-screen flex justify-around items-center p-1 main'>
          <h1 className={`text-3xl font-bold  ${darkmode == "light" ? "text-[#9D8640] " : " text-[#7F6F3E]"} `}>PortFolio</h1>
          {darkmode === "light" ?
            <div className={`w-10 h-10 bg-[#B7A261] text-white hover:bg-black flex justify-center items-center rounded-full p-2 font-bold `}>
              <MdLightbulb className='text-2xl' onClick={handleDarkMode} />
            </div>
            :
            <div className={`w-10 h-10 bg-[#B7A261] text-black flex justify-center items-center rounded-full p-2`}>
              <TbMoonFilled className='text-2xl' onClick={handleDarkMode} />
            </div>
          }
          <div className='w-10 h-10 bg-[#B7A261] text-white flex justify-center items-center rounded-full p-2 lg:hidden sm:block '>
            {cross ? <RxCross1 onClick={handleremove} className='text-2xl' /> : <LuMenu className='text-2xl' onClick={handleclick} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default ForMobile
