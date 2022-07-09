import React, { useState } from 'react'
import Calendar from 'react-calendar'
import Task from '../../components/task'

export default function CalendarMain() {


  const tasks = [
    {
      id: 1,
      title: "Go to job interview at kigali innovation center",
      type: "work",
      completed: false,
      setOn: "12 june 2022 10:02 am",
      deadLine: "today at 2:00 pm",
    },
    {
      id: 2,
      title: "Learn web3.js and solidity in the next week",
      type: "learning",
      completed: true,
      setOn: "12 june 2022 10:02 am",
      deadLine: "today at 2:00 pm",
    },
    {
      id: 3,
      title: "Go to job interview at kigali innovation center",
      type: "work",
      completed: false,
      setOn: "12 june 2022 10:02 am",
      deadLine: "today at 2:00 pm",
    }
  ]


  const [value,Onchange] = useState(new Date())
  return (
    <div className='h-[92%]'>
      <div className="bg-white mt-2  rounded-xl p-3 h-full overflow-auto">
        <h2 className="font-semibold text-lg text-center text-gray-700">View your tasks according to calendar</h2>

        <div className="calendar">
          <Calendar value={value} onChange={Onchange} />
        </div>
        <div className="pt-3 flex flex-col gap-1">
          {tasks.map((task)=>{
            return <Task task={task}/>
          })}
        </div>
      </div>
    </div>
  )
}
