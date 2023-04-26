import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
const Contact = () => {
  return (
    <div className='content-container'>
      <div className='bg-stone-200'>
        
        <h1 className='text-7xl font-nameHeaderFont'>Contact me</h1>
        <p>Reach out if you are interrested in any of my sculptures!</p>
        <div>
          <a href="https://www.instagram.com/bernardnicolas2/" target="_blank" rel="noreferrer">
            <FaInstagram className='inline-block m-1 text-2xl cursor-pointer hover:scale-110 duration-200' />
          </a>
          {/* <a href="mailto:bernardnicolasbrillanti@gmail.com"> */}
            <HiOutlineMail className='inline-block m-1 text-3xl cursor-pointer hover:scale-110 duration-200' />
          {/* </a> */}
        </div>

        <div className='flex justify-end w-[200px] max-h-80 lg:max-h-max right-0'>
          <div className='flex flex-col justify-center items-center'>
            <img src="images/Bernard_profile2.jpg" alt="Bernard Nicolas Brillanti" className='w-[400px] rounded-3xl' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact