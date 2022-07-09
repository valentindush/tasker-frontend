import React, { useState } from 'react'
import { Link,NavLink, useLocation } from 'react-router-dom'
import logo from '../utils/Logo.svg'
import './sidebar.css'
//  icons

import bell from '../utils/bell.svg'
import calendar from '../utils/calendar.svg'
import edit from '../utils/edit.svg'
import overview from '../utils/overview.svg'
import settings from '../utils/settings.svg'
import plus from '../utils/plus.svg'
import user from '../utils/user.svg'

export default function Sidebar(props) {
  const location = useLocation()
  const {pathname} = location
  const splitPath = pathname.split('/')

  return (
    <div className='h-full w-[300px] max-w-[350px] relative'>
        <div className="logo">
            <img src={logo} className="scale-85" alt="logo" />
        </div>
        <nav className='p-3 px-12 flex flex-col gap-2 w-full'>
            <NavLink  axact="true" to={"/"} className={`text-md text-white p-[7px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg font-medium flex items-center gap-2 ${splitPath[1] === ""?"bg-[#0075ff]":""}`}>
                  <img className='scale-[.85]' src={overview} alt="menu-icon"/>
                 <span className='text-sm text-gray-200'>Overview</span>
            </NavLink>
            <NavLink  axact="true" to={"/tasks"} className={`text-md text-white font-medium p-[7px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "tasks"?"bg-[#0075ff]":""}`}>
                  <img className='scale-[.85]' src={edit} alt="menu-icon"/>
                 <span className='text-sm text-gray-200'>Tasks</span>
            </NavLink>
            <NavLink axact="true" to={"/calendar"} className={`text-md text-white font-medium p-[7px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "calendar"?"bg-[#0075ff]":""}`}>
                  <img className='scale-[.85]' src={calendar} alt="menu-icon"/>
                 <span className='text-sm text-gray-200'>Calendar</span>
            </NavLink>

            <div className="">
              <button onClick={props.addTask} className='text-md text-white font-medium p-[5px] px-6 bg-[#0075FF] transition duration-300 ease-out rounded-lg ml-2 hover:scale-95 active:scale-95 absolute top-[65%]'>Add task</button>
            </div>

            <div className="absolute bottom-[6vh] flex flex-col gap-2  w-1/2">
              <NavLink axact="true" to={"/profile"} className={`text-md text-white font-medium p-[7px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "profile"?"bg-[#0075ff]":""}`}>
                    <img className='scale-[.85]' src={user}  alt="menu-icon"/>
                  <span className='text-sm text-gray-200'>Profile</span>
              </NavLink>
              <NavLink axact="true" to={"/settings"} className={`text-md text-white font-medium p-[7px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "settings"?"bg-[#0075ff]":""}`}>
                    <img className='scale-[.85]' src={settings} alt="menu-icon"/>
                  <span className='text-sm'>Settings</span>
              </NavLink>
            </div>

        </nav>

        
    </div>
  )
}
