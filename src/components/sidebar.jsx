import React from 'react'
import { Link,NavLink } from 'react-router-dom'
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
  return (
    <div className='h-full w-[300px] max-w-[350px] relative'>
        <div className="logo">
            <img src={logo} className="scale-85" alt="logo" />
        </div>
        <nav className='p-3 px-12 flex flex-col gap-2 w-full'>
            <NavLink  activeclassname="bg-[#0075FF]" axact="true" to={"/"} className='text-md text-white p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg font-medium flex items-center gap-2'>
                  <img src={overview}/>
                 <span>Overview</span>
            </NavLink>
            <NavLink activeclassname="bg-[#0075FF]" axact="true" to={"/tasks"} className='text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2'>
                  <img src={edit}/>
                 <span>Tasks</span>
            </NavLink>
            <NavLink activeclassname="bg-[#0075FF]" axact="true" to={"/calendar"} className='text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2'>
                  <img src={calendar}/>
                 <span>Calendar</span>
            </NavLink>

            <div className="absolute bottom-[6vh] flex flex-col gap-2  w-1/2">
              <NavLink activeclassname="bg-[#0075FF]" axact="true" to={"/profile"} className='text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2'>
                    <img src={user}/>
                  <span>Profile</span>
              </NavLink>
              <NavLink activeclassname="bg-[#0075FF]" axact="true" to={"/settings"} className='text-md text-white font-medium p-[10px] hover:bg-[#0075FF] transition duration-300 ease-out w-full rounded-lg flex items-center gap-2'>
                    <img src={settings}/>
                  <span>Settings</span>
              </NavLink>
            </div>

        </nav>
    </div>
  )
}
