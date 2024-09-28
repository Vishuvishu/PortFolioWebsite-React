import React, { useState } from 'react'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import "../App.css"

const Home = ({ show, setShow, darkmode, bgcolor, cross, setCross, handleclick, handleremove }) => {


  return (
    <>
      <div className='w-full m-1  homepage flex flex-col  items-center'>
        <div className='w-full sm:w-auto md:w-auto flex sm:flex-wrap md:flex-wrap sm:gap-3 md:gap-2 justify-center items-start'>

          {/* Profile Component */}
          <div className=''>
            <Profile
              show={show}
              setShow={setShow}
              darkmode={darkmode}
              bgcolor={bgcolor}
              cross={cross}
              setCross={setCross}
              handleclick={handleclick}
              handleremove={handleremove}
            />
          </div>

          {/* Outlet Component */}
          <div className='w-full sm:w-[53rem] md:w-[53rem] rounded-lg overflow-auto'>
            <Outlet />
          </div>

          {/* Navbar Component */}
          <div>
            <Navbar
              show={show}
              setShow={setShow}
              darkmode={darkmode}
              bgcolor={bgcolor}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
