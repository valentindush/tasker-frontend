import React from 'react'
import Task from '../../components/task'

export default function Tasks() {
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

  return (
    <div className=''>
      <div className="bg-white rounded-xl p-3 mt-2">
        <h2 className="font-semibold text-gray-700">Tasks for today</h2>
        <span className='text-xs font-medium text-gray-700'>Thursday, 23 June 2022</span>

        <div className="tasks pt-4 flex flex-col gap-1 max-h-[40vh] overflow-auto">
          {tasks.map((task)=>{
            return <Task task={task} />
          })}
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 mt-2">
        <h2 className="font-semibold text-gray-700">All tasks</h2>  
        <div className="tasks pt-4 flex flex-col gap-1 max-h-[31vh]  overflow-auto">
          {tasks.map((task)=>{
            return <Task task={task} />
          })}
        </div>
      </div>
    </div>
  )
}
