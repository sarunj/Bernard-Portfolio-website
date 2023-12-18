import React from 'react'
import MyWork from '../components/MyWork'
import Navbar from '../components/Navbar'

const MyWorkPage = () => {
  return (
    <div className="flex flex-col">
        <Navbar isTransparent={true}/>
        <MyWork />
        
    </div>
  )
}

export default MyWorkPage