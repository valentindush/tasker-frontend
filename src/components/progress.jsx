import React from 'react'

export default function Progress(props) {
  return (
    <div className='progress flex items-center justify-center pt-12'>
        <div className="circle scale-[1.35] relative">
            <svg className='rotate-[230deg]' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
            </defs>
            <circle  className='fill-white stroke-[20px]  stroke-[#eceff3]' cx="80" cy="80" r="70" stroke-linecap="round" />
            <circle fillRule='url(#GradientColor)' strokeDasharray={"472"} strokeDashoffset={`${472-(472*props.value/100)}`} className='fill-white stroke-[20px] stroke-dash stroke-[#0c52a3]' cx="80" cy="80" r="70" stroke-linecap="round" />
            

            </svg>
            <p  className='font-bold text-2xl text-[#0075ff] absolute bottom-[40%] left-[28%]'>{props.value}%</p>
        </div>
    </div>
  )
}
