import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Chart from "../../components/chart";
import Progress from "../../components/progress";
import Task from "../../components/task";
import { apiRoutes } from "../../utils/apiRoutes";
import { TaskContext } from "../taskContext";
export default function Overview() {

  const date = new Date();
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


  const editTask = (id)=>{

  }

  const deleteTask = (id)=>{

    const headers = new Headers()
    headers.append("Authorization", "Bearer " + localStorage.getItem('tasker_info'))
    const requestOptions = {
      method: "DELETE",
      headers: headers,
      redirect: 'follow'
    }

    fetch(apiRoutes.deletetask+id)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      throw err
    })
    
  }

  return (
    <div className="h-full">
      <Fade left>
      <div className="flex mt-2 gap-2">
        <div className="stats w-[60%] bg-white p-3 font-semibold text-gray-700 rounded-xl min-h-[250px]">
          <div className="header flex justify-between">
            <div className="txt">
              <h2 className="">
                Your statistics{" "}
                <span className="font-medium text-sm ml-2 text-[#0075FF]">
                  +12.82%
                </span>{" "}
              </h2>
            </div>
            <div className="btns font-normal flex gap-2 scale-90">
              <button className="p-1 px-5 rounded-lg inline-block  text-sm bg-black text-white">
                Month
              </button>
              <button className="p-1 px-5 rounded-lg inline-block  text-sm bg-white border-2 border-gray-500 text-black">
                Year
              </button>
            </div>
          </div>

          <div className="chart">
            {/* chart here*/}
            <Chart />
          </div>
        </div>
        <div className="progress w-[40%] bg-white p-3 rounded-xl min-h-[250px]  relative">
          <div className="header">
            <h2 className="font-semibold text-gray-700">Your progress</h2>
          </div>
          <Progress value={55.03} />
          <div className="flex justify-between px-4 mt-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0075FF] rounded-full"></div>
              <span className="font-medium text-gray-700 text-sm">Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#074994] rounded-full"></div>
              <span className="font-medium text-gray-700 text-sm">Finish</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white mt-2 max-h-[42%] overflow-auto p-3 rounded-xl">
        <div className="flex justify-between items-start">
          <div className="">
            <h2 className="font-semibold text-gray-700">Tasks for today</h2>
            <p className="text-xs font-medium ml-1 text-gray-600">Monday,12,July 2022</p>
          </div>
          <Link to="/tasks" className="text-xs hover:underline font-medium text-gray-600">view all tasks</Link>
        </div>
        <div className="tasks pt-4 flex flex-col gap-2">
          {tasksForToday.map((task)=>{
            return <Task task={task} />
          })}
        </div>
      </div>
      </Fade>
    </div>
  );
}
