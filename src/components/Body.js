import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  const [name, setName] = useState("venky")
  return (
    <div className='flex'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body