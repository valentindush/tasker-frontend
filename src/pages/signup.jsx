import React, { useState } from 'react'
import { darkBg } from '../utils/colors'
import logo from '../utils/Logo.svg'
import eye_off from '../utils/eye-off.svg'
import eye from '../utils/eye.svg'

export default function SignUp() {


  const [togglePassword,setTogglePassword] = useState(false)

  return (
      <div className={`w-screen h-screen bg-[#001833] flex items-center justify-center`}>

      <div className="f">
        <div className="logo m-auto w-fit">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-[600px] px-12 pt-8 bg-[#072F5F] rounded-lg pb-20">
            <h2 className='text-white font-semibold text-xl  pb-4 text-center'>Create new account</h2>
            <form action="#">
              <label className="block text-md text-white pb-2">Full name</label>
              <input type="text" className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Your name' />
              <label className="block text-md text-white pb-2 mt-4">Email</label>
              <input type="email" className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Your email address' />
              
              <div className="relative">
                <label className="block text-md text-white pb-2 mt-4">Password</label>
                <input type={`${togglePassword?"text":"password"}`} className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Choose password' />
                {!togglePassword?<img onClick={()=>setTogglePassword(true)} src={eye_off} alt="eye" className='absolute cursor-pointer right-2 bottom-3 opacity-90' />:
                <img onClick={()=>setTogglePassword(false)} src={eye} alt="eye" className='absolute cursor-pointer right-2 bottom-3 opacity-90' />}
              </div>

              <button type='submit' className={`bg-[#0075ff] text-white w-full p-2 rounded-md mt-5`}>Create account</button>

              <p className='text-white text-center mt-3'>Already joined? <a href="/login" className='text-blue-400'>login now</a></p>
            </form>
        </div>
      </div>
      </div>  
  )
}
