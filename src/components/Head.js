import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Head = () => {
  return (
    <div className='grid grid-flow-col p-4 shadow-lg'>
      <div className='flex col-span-1'>
        <RxHamburgerMenu className='h-8'/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s" alt='youtube-icon' className='h-8 mx-4'/>
      </div>
      <div className='col-span-10 px-10'>
        <input className='h-9 w-1/2 p-2 border border-gray-400  rounded-l-full' type='text'/>
        <button className='h-9 border-l-0 border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100'><CiSearch className='h-[13px]'/></button>
      </div>
      <div className='col-span-1'>
        <FaUserCircle className='h-8'/>
      </div>
    </div>
  )
}

export default Head