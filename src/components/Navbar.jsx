import React, { useState } from 'react';
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ isTransparent }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white fixed ${
        isTransparent ? 'bg-transparent' : 'bg-white'
      } z-10`}
    >
      <div>
        <h1 className="text-lg md:text-3xl font-nameHeaderFont ml-2 text-black">
          Bernard Nicolas Brillanti
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className='px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-110 duration-200'>
          <Link to='/'>Home</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-110 duration-200'>
          <Link to='/sculpture-gallery'>Sculpture Gallery</Link>
        </li>
        {/* <li className='px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-110 duration-200'>
          <Link to='/my-work'>My Work</Link>
        </li> */}
        <li className='px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-110 duration-200'>
          <Link to='/about-me'>About Me</Link>
        </li>
        {/* <li className='px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-110 duration-200'>
          <Link to='/contact'>Contact</Link>
        </li> */}
        <li className='px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-110 duration-200'>
          <a href="https://www.instagram.com/bernardnicolas2/" target="_blank" rel="noreferrer">
            <FaInstagram className='inline-block text-xl cursor-pointer hover:scale-100 duration-200'/>
          </a>
        </li>
      </ul>

      <div
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="cursor-pointer z-20 text-gray-500 md:hidden"
      >
        {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isNavOpen && (
        <ul
          className={`flex flex-col justify-center gap-y-10 items-center ${
            isTransparent
              ? 'bg-gradient-to-b from-black to-gray-900 bg-black'
              : 'bg-white'
          } w-full h-screen fixed top-0 left-0 z-10`}
        >
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
              <Link to='/'>Home</Link>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
              <Link to='/sculpture-gallery'>Sculpture Gallery</Link>
            </li>
            {/* <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
              <Link to='/my-work'>My Work</Link>
            </li> */}
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
              <Link to='/about-me'>About Me</Link>
            </li>
            {/* <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
              <Link to='/contact'>Contact</Link>
            </li> */}
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
              <a href="https://www.instagram.com/bernardnicolas2/" target="_blank" rel="noreferrer" className='capitalize font-medium text-gray-500'>
              <FaInstagram className='inline-block mb-[3px] text-xl cursor-pointer hover:scale-100 duration-200'/>
                {' '} Instagram 
                
              </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
