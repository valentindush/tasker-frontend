import React , {useState,useEffect}from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import { darkBg, primaryColor } from '../utils/colors'
import logo from '../utils/Logo.svg'
import axios from 'axios'
import { apiRoutes } from '../utils/apiRoutes'
import {useNavigate} from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'
export default function Login() {

  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError]  = useState('')
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  useEffect((e)=>{
    const token = localStorage.getItem('tasker_info')
    if(token){
      // navigate('/')
    }
  },[])

  const handleLogin = (e)=>{
    e.preventDefault()
    setIsLoading(true)

    axios.post(apiRoutes.login,{
      email,
      password
    }).then(res=>{
      setIsLoading(false)
      if(res.data.status){
        localStorage.setItem('tasker_info',res.data.token)
        navigate('/')
      }
    }).catch(err=>{
      setIsLoading(false)
      setError( err.response.data.message || "Somthing went wrong !")
    })

  }


  return (
    <div className={`w-screen h-screen bg-[#001833] flex items-center justify-center`}>

      <div className="f">
        <div className="logo m-auto w-fit">
          <img src={logo} alt="logo" />
        </div>
        <Fade left>
        <div className="w-[600px] px-12 pt-8 bg-[#072F5F] rounded-lg pb-12">
            <h2 className='text-gray-300 font-medium text-lg  pb-4 text-center'>Welcome back</h2>
            <form className={`${isLoading?"pointer-events-none opacity-80": ""}`} onSubmit={(e)=>handleLogin(e)} action="#" autoComplete='off'>
              <label className="block text-md text-gray-300 pb-2">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className=' border-[1px] border-white outline-none p-[8px] bg-transparent w-full rounded-md px-2 text-white text-sm focus:border-blue-400' placeholder='Your email' />
              <label className="block text-md text-gray-300 pb-2 mt-4">Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className=' border-[1px] border-gray outline-none p-[8px] bg-transparent w-full text-sm rounded-md px-2 text-white focus:border-blue-400' placeholder='Your Password' />
              <a href="/reset" className='text-white text-xs float-right mt-1 hover:underline'>Forgot password</a>
              <button type='submit' className={`bg-[#0075ff] text-white w-full p-2 rounded-md mt-3`}>Login</button>
              <p className='mt-4 text-center text-red-400'>{error}</p>

              <p className='text-gray-300 text-sm text-center mt-3'>Not yet joined? <a href="/auth/signup" className='text-blue-400'>Create account</a></p>
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
