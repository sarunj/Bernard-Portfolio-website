import React from 'react'
import MyWork from '../components/MyWork'
import Navbar from '../components/Navbar'

const MyWorkPage = () => {
  return (
    <div className="flex flex-col">
        <Navbar />
        <MyWork />
        
    </div>
  )
}

export default MyWorkPage