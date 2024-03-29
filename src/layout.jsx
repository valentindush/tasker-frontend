import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Overview from './pages/main/overview'
import './components/calendar.css'
import Calendar from 'react-calendar'
import profileImg from './utils/profile.png'
import Tasks from './pages/main/tasks'
import CalendarMain from './pages/main/calendar'
import Profile from './pages/main/profile'
import { Fade } from 'react-reveal'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { apiRoutes } from './utils/apiRoutes'
import { ThreeCircles, ThreeDots } from 'react-loader-spinner'
import { TaskContext } from './pages/taskContext'

export default function Layout() {

  const [recentTasks,setRecentTaks] = useState([])

  const navigate = useNavigate()
  const [showAddTask, setShowAddTask] = useState(false)
  const [value,onChange] = useState(new Date());
  const [dataLoaded,setDataLoaded] = useState(false)


  useEffect(()=>{
    const token = localStorage.getItem('tasker_info')
    if(!token){
      navigate('/auth/login')
    }
  },[])

  //GETTING TASK FROM API AND SETTING IT TO STATE

  const [tasks, setTasks] = useState([])
  const [taskErr,setTaskErr] = useState(null)


  const getTasks = ()=>{
    const token = localStorage.getItem("tasker_info")
    if(!token) return
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    setIsLoading2(true)
    fetch(apiRoutes.gettasks, requestOptions)
      .then(response => response.json())
      .then((result) => {
        setIsLoading2(false)
        setTasks(result.tasks)
        setRecentTaks(tasks)
        setDataLoaded(true)
      })
      .catch((error) => {
        setIsLoading2(false)
        setDataLoaded(false)
        setTaskErr("Something Went wrong! check your internet connection")
      });
  }

  useEffect(()=>{
    getTasks()
  },[])

  

  const [desc,setDesc] = useState("")
  const [category,setCategory] = useState("")
  const [deadline,setDeadline] = useState("2022-02-02")

  const [isLoading,setIsLoading ]  = useState(false)
  const [isLoading2,setIsLoading2] = useState(false)
  const [txtSuccess,setTxtSuccess] = useState("")
  const [txtError,setTxtError] = useState("")
  const addTask = ()=>{
    setIsLoading(true)
    axios.post(apiRoutes.addtask,{
      token: localStorage.getItem("tasker_info"),
      type: category,
      description: desc,
      deadline:deadline
    }).then(res=>{
      setIsLoading(false)
      if(res.data.status){
        setTxtSuccess("Task added successfully")

        setTimeout(() => {
          setShowAddTask(false)
          setTxtSuccess("")
        }, 1000);
        getTasks()
      }
    }).catch(res=>{
      setIsLoading(false)
      setTxtError("Oops! there was an error while adding task")
      console.log(res)
    })
  }


  return (
    
    <TaskContext.Provider value={tasks}>
      <div className='h-screen w-screen bg-[#001833] flex'>
       
       <Sidebar showAddTask={showAddTask} addTask={setShowAddTask} />


       <div className='w-full h-full p-4 relative'>
        {isLoading2&&<div className="absolute z-10 top-[40%] left-[40%]">
          <ThreeCircles color='#0075ff' />
          
        </div>}
         <div className={`w-full h-full z-0 bg-[#EEF3F9] bg-opacity-70 ${isLoading2?"pointer-events-none opacity-40":""} rounded-xl overflow-auto p-6 pb-4`}>
          {dataLoaded?<div className="flex  h-full">
             <div className="w-[70%] h-full">
               <div className="flex gap-1">
                 <Fade right>
                 <div className="search bg-white h-[45px] w-full relative rounded-xl">
                   <svg className='absolute top-[11px] left-4 opacity-70' width="23" height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67867 17.988 3.5 12.8333 3.5C7.67867 3.5 3.5 7.67867 3.5 12.8333C3.5 17.988 7.67867 22.1667 12.8333 22.1667Z" stroke="#404346" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M24.5 24.5L19.425 19.425" stroke="#404346" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   <input type="text" className="p-3 h-full text-sm w-full pl-12 rounded-lg outline-none" placeholder="Search something " />
                 </div>
                 <div className="h-[45px] rounded-xl cursor-pointer w-[50px] bg-white flex items-center justify-center">
                   <svg className='opacity-70' width="23" height="23" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M19.5 8.66666C19.5 6.94275 18.8152 5.28945 17.5962 4.07046C16.3772 2.85148 14.7239 2.16666 13 2.16666C11.2761 2.16666 9.62279 2.85148 8.40381 4.07046C7.18482 5.28945 6.5 6.94275 6.5 8.66666C6.5 16.25 3.25 18.4167 3.25 18.4167H22.75C22.75 18.4167 19.5 16.25 19.5 8.66666Z" stroke="#001833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M14.8742 22.75C14.6837 23.0783 14.4104 23.3509 14.0814 23.5403C13.7525 23.7298 13.3796 23.8295 13 23.8295C12.6204 23.8295 12.2475 23.7298 11.9186 23.5403C11.5897 23.3509 11.3163 23.0783 11.1259 22.75" stroke="#001833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <circle cx="19" cy="6" r="3" fill="#0075FF"/>
                   </svg>
                 </div>
                 <div className="h-[45px] rounded-xl cursor-pointer w-[50px] bg-white flex items-center justify-center">
                   <svg className='opacity-70' width="23" height="23" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z" stroke="#001833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M21.0166 16.25C20.8724 16.5768 20.8294 16.9392 20.8931 17.2906C20.9569 17.6421 21.1244 17.9664 21.3741 18.2217L21.4391 18.2867C21.6406 18.4879 21.8004 18.7269 21.9094 18.9899C22.0185 19.2529 22.0746 19.5349 22.0746 19.8196C22.0746 20.1043 22.0185 20.3863 21.9094 20.6493C21.8004 20.9123 21.6406 21.1513 21.4391 21.3525C21.2379 21.554 20.999 21.7138 20.7359 21.8228C20.4729 21.9318 20.191 21.988 19.9062 21.988C19.6215 21.988 19.3396 21.9318 19.0765 21.8228C18.8135 21.7138 18.5745 21.554 18.3733 21.3525L18.3083 21.2875C18.053 21.0378 17.7287 20.8702 17.3773 20.8065C17.0259 20.7428 16.6634 20.7858 16.3366 20.93C16.0162 21.0673 15.743 21.2954 15.5505 21.586C15.358 21.8767 15.2547 22.2172 15.2533 22.5658V22.75C15.2533 23.3246 15.025 23.8757 14.6187 24.2821C14.2124 24.6884 13.6613 24.9167 13.0866 24.9167C12.512 24.9167 11.9609 24.6884 11.5546 24.2821C11.1483 23.8757 10.92 23.3246 10.92 22.75V22.6525C10.9116 22.2939 10.7955 21.9462 10.5869 21.6544C10.3782 21.3627 10.0866 21.1405 9.74998 21.0167C9.42323 20.8725 9.06077 20.8295 8.70934 20.8932C8.35791 20.9569 8.03363 21.1244 7.77831 21.3742L7.71331 21.4392C7.51209 21.6406 7.27313 21.8004 7.0101 21.9095C6.74707 22.0185 6.46513 22.0746 6.1804 22.0746C5.89566 22.0746 5.61372 22.0185 5.35069 21.9095C5.08766 21.8004 4.8487 21.6406 4.64748 21.4392C4.44603 21.238 4.28622 20.999 4.17718 20.736C4.06815 20.4729 4.01202 20.191 4.01202 19.9063C4.01202 19.6215 4.06815 19.3396 4.17718 19.0766C4.28622 18.8135 4.44603 18.5746 4.64748 18.3733L4.71248 18.3083C4.96223 18.053 5.12976 17.7287 5.19348 17.3773C5.2572 17.0259 5.21419 16.6634 5.06998 16.3367C4.93265 16.0163 4.70463 15.743 4.41398 15.5505C4.12334 15.358 3.78275 15.2547 3.43415 15.2533H3.24998C2.67534 15.2533 2.12424 15.0251 1.71791 14.6187C1.31159 14.2124 1.08331 13.6613 1.08331 13.0867C1.08331 12.512 1.31159 11.9609 1.71791 11.5546C2.12424 11.1483 2.67534 10.92 3.24998 10.92H3.34748C3.70606 10.9116 4.05382 10.7956 4.34555 10.5869C4.63729 10.3782 4.8595 10.0866 4.98331 9.75001C5.12752 9.42326 5.17054 9.0608 5.10682 8.70937C5.0431 8.35794 4.87556 8.03366 4.62581 7.77834L4.56081 7.71334C4.35936 7.51212 4.19955 7.27316 4.09052 7.01013C3.98148 6.7471 3.92536 6.46516 3.92536 6.18043C3.92536 5.89569 3.98148 5.61375 4.09052 5.35072C4.19955 5.08769 4.35936 4.84873 4.56081 4.64751C4.76204 4.44606 5.001 4.28625 5.26403 4.17721C5.52705 4.06818 5.809 4.01206 6.09373 4.01206C6.37846 4.01206 6.6604 4.06818 6.92343 4.17721C7.18646 4.28625 7.42542 4.44606 7.62665 4.64751L7.69165 4.71251C7.94696 4.96226 8.27125 5.12979 8.62267 5.19351C8.9741 5.25724 9.33656 5.21422 9.66331 5.07001H9.74998C10.0704 4.93268 10.3437 4.70466 10.5361 4.41401C10.7286 4.12337 10.8319 3.78278 10.8333 3.43418V3.25001C10.8333 2.67537 11.0616 2.12427 11.4679 1.71795C11.8742 1.31162 12.4253 1.08334 13 1.08334C13.5746 1.08334 14.1257 1.31162 14.532 1.71795C14.9384 2.12427 15.1666 2.67537 15.1666 3.25001V3.34751C15.168 3.69611 15.2713 4.0367 15.4638 4.32735C15.6563 4.618 15.9296 4.84602 16.25 4.98334C16.5767 5.12755 16.9392 5.17057 17.2906 5.10685C17.642 5.04313 17.9663 4.87559 18.2216 4.62584L18.2866 4.56084C18.4879 4.35939 18.7268 4.19958 18.9899 4.09055C19.2529 3.98151 19.5348 3.92539 19.8196 3.92539C20.1043 3.92539 20.3862 3.98151 20.6493 4.09055C20.9123 4.19958 21.1513 4.35939 21.3525 4.56084C21.5539 4.76207 21.7137 5.00103 21.8228 5.26406C21.9318 5.52709 21.9879 5.80903 21.9879 6.09376C21.9879 6.37849 21.9318 6.66043 21.8228 6.92346C21.7137 7.18649 21.5539 7.42545 21.3525 7.62668L21.2875 7.69168C21.0377 7.947 20.8702 8.27128 20.8065 8.62271C20.7428 8.97413 20.7858 9.33659 20.93 9.66334V9.75001C21.0673 10.0704 21.2953 10.3437 21.586 10.5362C21.8766 10.7287 22.2172 10.832 22.5658 10.8333H22.75C23.3246 10.8333 23.8757 11.0616 24.282 11.4679C24.6884 11.8743 24.9166 12.4254 24.9166 13C24.9166 13.5746 24.6884 14.1257 24.282 14.5321C23.8757 14.9384 23.3246 15.1667 22.75 15.1667H22.6525C22.3039 15.1681 21.9633 15.2714 21.6726 15.4638C21.382 15.6563 21.154 15.9296 21.0166 16.25V16.25Z" stroke="#001833" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                 </div>
                 </Fade>
               </div>
               <Routes>
                 <Route path="/" element={<Overview/>} />
                 <Route path='/tasks' element={<Tasks/>} />
                 <Route path='/calendar' element={<CalendarMain/>} />
                 <Route path='/profile' element={<Profile/>} />
               </Routes>
             </div>

             <div className="w-[30%]">
               <Fade right>
               <div className="bg-white w-full p-2 rounded-xl h-full ml-[10px] overflow-y-auto">
                 
                 <div className="profile w-full pt-5">
                   <div className="img w-[200px] h-[200px] m-auto">
                     <img className='w-full h-full rounded-full object-cover' src={profileImg} alt="profile" />
                   </div>

                   <div className="name w-full text-center pt-2">
                     <h1 className="text-xl font-semibold text-gray-700">Samantha Cartel</h1>
                     <p>Senior front-end developer at Salenix</p>
                   </div>
                 </div>
                 
                 <div className="">
                   <Calendar onChange={onChange} value={value} />
                 </div>
                 <div className="">
                   <h2 className='py-2 font-medium'>Recently added</h2>
                   <div className="flex flex-col gap-1">
                     {recentTasks.map((task)=>{
                       return (
                         <div key={task._id} className='border-[1px] p-2 border-gray-400 rounded-lg flex items-center gap-2 cursor-pointer hover:scale-[0.98] transition duration-300 ease-out'>
                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                           <p className='text-sm'>{task.description}</p>
                         </div>
                       )
                     })}
                   </div>
                 </div>
               </div>
               </Fade>
             </div>
           </div>:
           <div className='flex flex-col items-center justify-center'>
            <p className='text-center mt-24 text-red-500'>Something went wrong please check your internet connection</p>
            <button className='p-2 px-5 bg-red-500 mx-auto text-gray-300 mt-4 rounded-lg' onClick={getTasks}>Retry</button>
           </div>}
         </div>
       </div>
       {showAddTask && 
       <Fade duration={500} left>
       <div className="flex items-center justify-center bg-black bg-opacity-40 absolute w-full h-full">
             <div className="bg-white w-[400px] h-fit relative  rounded-xl p-3">
                 <div className="flex flex-row-reverse justify-between">
                   <button onClick={()=>setShowAddTask(false)} className='border-red-300 border w-6 flex items-center justify-center h-6 rounded-full'>
                     <svg className='' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.5L3.5 10.5" stroke="#BA4A4A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3.5 3.5L10.5 10.5" stroke="#BA4A4A" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                   </button>
                   <h2 className='font-medium text-gray-700'>New task</h2>
                 </div>

                 <div className="form">
                   <div className="field">
                     <label className='text-sm text-gray-700 block mt-5'>Description</label>
                     <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder={'what\'s the task about'} className="outline-none border border-gray-500 w-full p-2 font-normal text-gray-800 text-sm rounded-md">
                     </textarea>
                   </div> 
                   <div className="field">
                     <label className='text-sm block mt-3 text-gray-700'>Choose category</label>
                     <select value={category} onChange={(e)=>setCategory(e.target.value)} className='w-full text-sm rounded-md border border-gray-500 outline-none p-1'>
                       <option value="">Select category</option>
                       <option value="work">Work</option>
                       <option value="learning">Learning</option>
                       <option value="personal">Personal</option>
                       <option value="travel">Travel</option>
                       <option value="others">Others</option>
                     </select>
                     
                   </div>
                   <div className="field">
                     <label className='text-sm block mt-3 text-gray-700'>Choose a deadline</label>
                     <input value={deadline} onChange={(e)=>setDeadline(e.target.value)} type="date" placeholder='choose a date' className="p-1 text-sm border border-gray-500 rounded-md outline-none w-full" />
                   </div>
                   {isLoading && <div className="loader absolute top-1/2 left-[40%]">
                     <ThreeCircles width={70} height={70} color='#0075ff' />
                   </div>}
                   <div className="field">
                     <button onClick={addTask} className='p-2 bg-[#0075ff] text-white mt-3 rounded-md text-sm hover:scale-95 cursor-pointer transition duration-300 ease-out'>Save task</button>
                   </div>
                   <p className={`text-green-500 text-sm`}>{txtSuccess}</p>
                   <p className={`text-red-500 text-sm`}>{txtError}</p>

                 </div>
             </div>
       </div>
       </Fade>}
      </div>
    </TaskContext.Provider>
  )
}
