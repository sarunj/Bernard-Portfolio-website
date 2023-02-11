import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
 
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black z-10">
        <div>
            <h1 className="text-lg md:text-3xl font-nameHeaderFont ml-2">Bernard Nicolas Brillanti</h1>
        </div>

      <ul className='hidden md:flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
          <Link to='/'>Home</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
          <Link to='/sculpture-gallery'>Sculpture Gallery</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
          <Link to='/my-work'>My Work</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
          <Link to='/about-me'>About Me</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      
      <div onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer z-20 text-gray-500 md:hidden' >
        {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>


        {isNavOpen && (
            <ul className='flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 bg-black w-full h-screen fixed top-0 left-0 z-10'>
              <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                <Link to='/'>Home</Link>
              </li>
              <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                <Link to='/sculpture-gallery'>Sculpture Gallery</Link>
              </li>
              <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                <Link to='/my-work'>My Work</Link>
              </li>
              <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                <Link to='/about-me'>About Me</Link>
              </li>
              <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul> 
        )}



    </div>

  );
}

// const Navbar_link = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

export default Navbar

