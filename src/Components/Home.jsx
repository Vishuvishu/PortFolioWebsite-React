import React, { useState } from 'react'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import "../App.css"

const Home = ({ show, setShow, darkmode, bgcolor, cross, setCross, handleclick, handleremove }) => {


  return (
    <>
<div className='w-full h-[100vh] m-10 homepage flex flex-col justify-center items-center'>
  <div className='w-full sm:w-auto md:w-auto flex sm:flex-wrap md:flex-wrap sm:gap-3 md:gap-2 justify-around items-center'>
    
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
    <div className='w-full sm:w-[53rem] md:w-[53rem] h-[120vh] rounded-lg overflow-auto'>
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
