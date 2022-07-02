import React, { useState } from 'react'

export default function Calendar() {


    const data = [
        {
            name: "January",
            days: 31,
        },
        {
            name: "February",
            days: 28,
        },
        {
            name: "March",
            days: 31,
        },
        {
            name: "April",
            days: 30,
        },
        {
            name: "May",
            days: 31,
        },
        {
            name: "June",
            days: 30,
        },
        {
            name: "July",
            days: 31,
        },
        {
            name: "August",
            days: 31,
        },
        {
            name: "September",
            days: 30,
        },
        {
            name: "October",
            days: 31,
        },
        {
            name: "November",
            days: 30,
        },
        {
            name: "December",
            days: 31,
        }
    ]

    const [currentDate,setCurrentDate] = useState(new Date()) 

    const giveDays = (month) => {
        
        for(i=1;i<data[month+1].days;i++){
          

        }
    }

  return (
    <div className='w-full'>
        <div className='header flex items-center gap-4'>
            <span></span>
            <span>July</span>
            <span></span>
        </div>
        <div className="main">

        </div>
    </div>
  )
}
