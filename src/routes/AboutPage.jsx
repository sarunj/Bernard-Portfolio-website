import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'

const AboutPage = () => {
  return (
    <div className="flex flex-col">
        <Navbar /> 
        <About /> 
    </div>
  )
}

export default AboutPage