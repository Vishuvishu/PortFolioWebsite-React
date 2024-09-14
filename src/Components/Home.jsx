import React, { useState } from 'react'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import "../App.css"

const Home = ({ show, setShow, darkmode, bgcolor, cross, setCross, handleclick, handleremove }) => {


  return (
    <>

      <div className='w-full h-[100vh] m-10 homepage flex sm:flex-wrap md:flex-wrap sm:gap-3 md:gap-2 sm:justify-center md:justify-center justify-around items-center'>
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

        <div className='w-[53rem] rounded-lg'>
          <Outlet />
        </div>

        <div>
          <Navbar
            show={show}
            setShow={setShow}
            darkmode={darkmode}
            bgcolor={bgcolor}
          />
        </div>
      </div>

    </>
  )
}

export default Home
