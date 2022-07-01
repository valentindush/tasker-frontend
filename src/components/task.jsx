import React, { useState } from 'react'

export default function Task(props) {
    const [task,setTask] = useState(props.task)

  return (
    <div className='bg-[#F6FAFF] h-[150px] p-3  border-2 border-[#0075FF] border-opacity-10 rounded-2xl'>
        <div className="flex items-start justify-between">
            <div className="">
                <h2 className=''>{task.title}</h2>
                <p className='text-xs text-gray-600'>Set on {task.setOn}</p>
            </div>
            <div className="flex items-center gap-2 pr-3">
                <p className='text-sm'>Completed</p>
                {!task.completed?<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 3.5L3.5 10.5" stroke="#BA4A4A" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.5 3.5L10.5 10.5" stroke="#BA4A4A" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>:
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>}

            </div>
        </div>
        <div className="flex items-center gap-1 mt-3">
            <div className="w-2 h-2 bg-[#0075ff] rounded-full"></div>
            <span className='text-sm text-gray-600'>{task.type}</span>
        </div>
        <div className="mt-3 flex justify-between">
            <div className="">
                <p className='text-sm font-medium'>Deadline</p>
                <p className='text-xs text-gray-600'>{task.deadLine}</p>
            </div>
            <div className="btns flex gap-2 scale-90">
                <button className='text-sm bg-[#0075ff] w-[40px] flex items-center justify-center rounded-full hover:scale-95 transition duration-300 ease-out'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.6875 4H4C3.56902 4 3.1557 4.1712 2.85095 4.47595C2.5462 4.7807 2.375 5.19402 2.375 5.625V17C2.375 17.431 2.5462 17.8443 2.85095 18.149C3.1557 18.4538 3.56902 18.625 4 18.625H15.375C15.806 18.625 16.2193 18.4538 16.524 18.149C16.8288 17.8443 17 17.431 17 17V11.3125" stroke="#F6F9FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.7812 2.78125C16.1045 2.45802 16.5429 2.27643 17 2.27643C17.4571 2.27643 17.8955 2.45802 18.2188 2.78125C18.542 3.10448 18.7236 3.54288 18.7236 4C18.7236 4.45712 18.542 4.89552 18.2188 5.21875L10.5 12.9375L7.25 13.75L8.0625 10.5L15.7812 2.78125Z" stroke="#F6F9FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className='text-sm flex gap-2 rounded-lg p-2 justify-center items-center border-2 border-[#0075ff] hover:scale-95 transition duration-300 ease-out'>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4167 8.77166V9.5C17.4157 11.2072 16.8629 12.8683 15.8408 14.2356C14.8186 15.6029 13.3818 16.6032 11.7447 17.0873C10.1076 17.5713 8.35787 17.5132 6.7565 16.9215C5.15512 16.3299 3.78789 15.2365 2.85872 13.8043C1.92954 12.3722 1.48821 10.678 1.60053 8.97458C1.71286 7.27111 2.37283 5.64959 3.48201 4.35185C4.59119 3.05411 6.09016 2.14968 7.75536 1.77345C9.42055 1.39722 11.1628 1.56935 12.7221 2.26417" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.4167 3.16667L9.5 11.0912L7.125 8.71625" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='font-medium text-gray-700'>Complete</span>
                </button>
                <button className='text-sm flex gap-2 rounded-lg p-2 justify-center items-center border-2 border-[#BA4A4A] hover:scale-95 transition duration-300 ease-out'>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.375 4.75H3.95833H16.625" stroke="#BA4A4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.0417 4.75V15.8333C15.0417 16.2533 14.8749 16.656 14.578 16.9529C14.281 17.2498 13.8783 17.4167 13.4584 17.4167H5.54171C5.12178 17.4167 4.71905 17.2498 4.42212 16.9529C4.12519 16.656 3.95837 16.2533 3.95837 15.8333V4.75M6.33337 4.75V3.16667C6.33337 2.74674 6.50019 2.34401 6.79712 2.04708C7.09406 1.75015 7.49678 1.58333 7.91671 1.58333H11.0834C11.5033 1.58333 11.906 1.75015 12.203 2.04708C12.4999 2.34401 12.6667 2.74674 12.6667 3.16667V4.75" stroke="#BA4A4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.91663 8.70833V13.4583" stroke="#BA4A4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.0834 8.70833V13.4583" stroke="#BA4A4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='font-medium text-gray-700'>Remove</span>
                </button>

            </div>
        </div>
    </div>
  )
}
