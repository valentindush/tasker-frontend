import React from 'react'
import { Link } from 'react-router-dom'
import { darkBg, primaryColor } from '../utils/colors'
import logo from '../utils/Logo.svg'
export default function Login() {
  return (
    <div className={`w-screen h-screen bg-[#001833] flex items-center justify-center`}>

      <div className="f">
        <div className="logo m-auto w-fit">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-[600px] px-12 pt-8 bg-[#072F5F] rounded-lg pb-20">
            <h2 className='text-white font-semibold text-xl  pb-4 text-center'>Welcome back</h2>
            <form action="#">
              <label className="block text-md text-white pb-2">Email</label>
              <input type="email" className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Your email' />
              <label className="block text-md text-white pb-2 mt-4">Password</label>
              <input type="email" className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Your Password' />
              <a href="/reset" className='text-white text-sm float-right mt-1 hover:underline'>Forgot password</a>

              <button type='submit' className={`bg-[#0075ff] text-white w-full p-2 rounded-md mt-3`}>Login</button>

              <p className='text-white text-center mt-3'>Not yet joined? <a href="/signup" className='text-blue-400'>Create account</a></p>
            </form>
        </div>
      </div>
    </div>  
  )
}
