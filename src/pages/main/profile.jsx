import React, { useState } from 'react'

export default function Profile() {

  const [name,setName] = useState('')
  const [about,setAbout] = useState('')
  const [img,setImg] = useState(null)


  const submit = () => {
    
  }

  return (
    <div className='h-[94%]'>
        <div className="bg-white mt-2 rounded-xl p-3 h-full w-full">
          <h2 className="font-semibold text-gray-700 text-lg text-center">Edit your profile</h2>
            
          <div className="px-24">
            <div className="pic flex items-center gap-3  mt-12">
              <img className='w-[250px] h-[200px] rounded-lg object-cover' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
              <div className=" flex flex-col gap-3  ">
                <button className='p-2 border-[1px] rounded-lg text-sm '>Upload photo</button>
                <button className='p-2 border-[1px] border-red-500 text-red-400 rounded-lg text-sm '>Remove photo</button>
              </div>
            </div>
            <div className="mt-8">

              <div className="field">
                <label className='block py-2'>Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} className='outline-none border border-gray-500 rounded-lg p-2 w-full' type="text" placeholder='e.g john doe cartel' />
              </div>
              <div className="field">
                <label className='block py-2'>About</label>
                <input value={about} onChange={(e)=>setAbout(e.target.value)} className='outline-none border border-gray-500 rounded-lg p-2 w-full' type="text" placeholder='Anyting about you' />
              </div>
              <div className="field submit">
                <button onClick={submit} className='p-2  mt-3 px-4 bg-[#0075FF] text-white hover:scale-95 transition duration-300 ease-out rounded-lg'>Update profile</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
