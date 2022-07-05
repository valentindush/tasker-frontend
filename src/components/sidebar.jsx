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

export default function Sidebar() {
  const location = useLocation()
  const {pathname} = location
  const splitPath = pathname.split('/')

  return (
    <div className='h-full w-[300px] max-w-[350px] relative'>
        <div className="logo">
            <img src={logo} className="scale-85" alt="logo" />
        </div>
        <nav className='p-3 px-12 flex flex-col gap-2 w-full'>
            <NavLink  axact="true" to={"/"} className={`text-md text-white p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg font-medium flex items-center gap-2 ${splitPath[1] === ""?"bg-[#0075ff]":""}`}>
                  <img src={overview} alt="menu-icon"/>
                 <span>Overview</span>
            </NavLink>
            <NavLink  axact="true" to={"/tasks"} className={`text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "tasks"?"bg-[#0075ff]":""}`}>
                  <img src={edit} alt="menu-icon"/>
                 <span>Tasks</span>
            </NavLink>
            <NavLink axact="true" to={"/calendar"} className={`text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "calendar"?"bg-[#0075ff]":""}`}>
                  <img src={calendar} alt="menu-icon"/>
                 <span>Calendar</span>
            </NavLink>

            <div className="absolute bottom-[6vh] flex flex-col gap-2  w-1/2">
              <NavLink axact="true" to={"/profile"} className={`text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "profile"?"bg-[#0075ff]":""}`}>
                    <img src={user} alt="menu-icon"/>
                  <span>Profile</span>
              </NavLink>
              <NavLink axact="true" to={"/settings"} className={`text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2 ${splitPath[1] === "settings"?"bg-[#0075ff]":""}`}>
                    <img src={settings} alt="menu-icon"/>
                  <span>Settings</span>
              </NavLink>
            </div>

        </nav>
    </div>
  )
}
