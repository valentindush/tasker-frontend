import React from 'react'
import Sidebar from './components/sidebar'

export default function Layout() {
  return (
    <div className='h-screen w-screen bg-[#001833] flex'>
        <Sidebar />

        <div className='w-full h-full p-4'>
          <div className='w-full h-full bg-[#EEF3F9] bg-opacity-70 rounded-xl overflow-auto'>

          </div>
        </div>
    </div>
  )
}
