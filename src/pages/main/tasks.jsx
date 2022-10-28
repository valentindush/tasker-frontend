import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Fade } from 'react-reveal'
import Task from '../../components/task'
import { TaskContext } from '../taskContext'

export default function Tasks() {
  const tasks = useContext(TaskContext)
  const tasksForToday = []
  tasks.forEach((task)=>{
    const today = new Date()
    const deadlineDate = new Date(task.deadline)

    const day = deadlineDate.getDay()
    const month = deadlineDate.getMonth()
    const year = deadlineDate.getFullYear()

    const day_b = today.getDay()
    const month_b = today.getMonth()
    const year_b = today.getFullYear()

    if(day === day_b && month === month_b && year ===  year_b){
      tasksForToday.push(task)
    }
    
  })

  return (
    <div className='flex flex-col h-[94%] overflow-hidden'>
      <Fade left>
      <div className="bg-white rounded-xl p-3 mt-2 h-fit overflow-auto  ">
        <h2 className="font-semibold text-gray-700">Tasks for today</h2>
        <span className='text-xs font-medium text-gray-700'>Thursday, 23 June 2022</span>

        <div className="tasks pt-4 flex flex-col gap-1 ">
          {tasksForToday.map((task)=>{
            return <Task task={task} />
          })}
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 mt-2 h-1/2 overflow-auto">
        <h2 className="font-semibold text-gray-700">All tasks</h2>  
        <div className="tasks pt-4 flex flex-col gap-1  ">
          {tasks.map((task)=>{
            return <Task task={task} />
          })}
        </div>
      </div>
      </Fade>
    </div>
  )
}
