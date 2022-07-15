import React, { useState } from 'react'
import { darkBg } from '../utils/colors'
import logo from '../utils/Logo.svg'
import eye_off from '../utils/eye-off.svg'
import eye from '../utils/eye.svg'
import { ThreeCircles } from 'react-loader-spinner'
import { Fade } from 'react-reveal'
import axios from 'axios'
import { apiRoutes } from '../utils/apiRoutes'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
export default function SignUp() {

  const navigate = useNavigate()

  const [togglePassword,setTogglePassword] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError]  = useState('')
  const [names,setNames] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  useEffect((e)=>{
    const token = localStorage.getItem('tasker_info')
    if(token){
      navigate('/')
    }
  },[])

  const handleSignup = (e)=>{
    e.preventDefault()
    setIsLoading(true)


    axios.post(apiRoutes.signup,{
      names,
      email,
      password
    }).then(res=>{
      setIsLoading(false)
      console.log(res)
      if(res.data.status){
        localStorage.setItem('tasker_info',JSON.stringify(res.data.token))
        navigate('/')
      }
      if(res.response.data.status === true){
        console.log(res.response.data.token)
      }
    }).catch(err=>{
      setIsLoading(false)
      setError(err.response.data.message)
    })

  } 

  return (
      <div className={`w-screen h-screen bg-[#001833] flex items-center relative justify-center`}>

      <div className="f">
        <div className="logo m-auto w-fit">
          <img src={logo} alt="logo" />
        </div>
        <Fade fade>
        <div className="w-[600px] px-12 pt-8 bg-[#072F5F] rounded-lg pb-16 scale-95">
            <h2 className='text-white font-semibold text-xl  pb-4 text-center'>Create new account</h2>
            <form onSubmit={(e)=>handleSignup(e)} action="#" className={`${isLoading?"pointer-events-none opacity-60":""}`}>
              <label className="block text-md text-white pb-2">Full name</label>
              <input value={names} onChange={(e)=>setNames(e.target.value)} type="text" className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Your name' />
              <label className="block text-md text-white pb-2 mt-4">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Your email address' />
              
              <div className="relative">
                <label className="block text-md text-white pb-2 mt-4">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type={`${togglePassword?"text":"password"}`} className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white focus:border-blue-400' placeholder='Choose password' />
                {!togglePassword?<img onClick={()=>setTogglePassword(true)} src={eye_off} alt="eye" className='absolute cursor-pointer right-2 bottom-3 opacity-90' />:
                <img onClick={()=>setTogglePassword(false)} src={eye} alt="eye" className='absolute cursor-pointer right-2 bottom-3 opacity-90' />}
              </div>

                <p className='text-sm text-red-400 mt-2 text-center'>{error}</p>
              <button type='submit' className={`bg-[#0075ff] text-white w-full p-2 rounded-md mt-5`}>Create account</button>

              <p className='text-white text-center mt-3'>Already joined? <a href="/auth/login" className='text-blue-400'>login now</a></p>

            </form>
            {isLoading&&
              <div className='absolute z-10 top-1/2 left-[42%]'>
                <ThreeCircles
                  width={100}
                  height={100}
                  color="#0075FF"
                />
                
              </div>}
        </div>
        </Fade>
      </div>
      </div>  
  )
}
